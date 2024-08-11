import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { TransactionService } from '../services';
import { Transaction } from 'src/entity';
import { CreateTransactionDto } from '../dto';

const pubSub = new PubSub();

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query(() => [Transaction])
  async transactions() {
    return this.transactionService.findAll();
  }

  @Mutation(() => Transaction)
  async createTransaction(@Args('createTransactionInput') createTransactionInput: CreateTransactionDto) {
    const transaction = await this.transactionService.create(createTransactionInput);
    await pubSub.publish('transactionCreated', { transactionCreated: transaction }).catch(() => {});
    return transaction;
  }

  @Subscription(() => Transaction)
  transactionCreated() {
    return pubSub.asyncIterator('transactionCreated');
  }
}

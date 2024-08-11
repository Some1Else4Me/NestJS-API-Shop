import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from 'src/entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  async create(transaction: Partial<Transaction>): Promise<Transaction> {
    const newTransaction = this.transactionRepository.create(transaction);
    return this.transactionRepository.save(newTransaction);
  }
}

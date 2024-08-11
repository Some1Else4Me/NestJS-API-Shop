import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/entity';
import { TransactionService } from './services';
import { TransactionResolver } from './resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [TransactionService, TransactionResolver],
})
export class TransactionModule {}

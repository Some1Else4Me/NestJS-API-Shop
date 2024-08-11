import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name!: string;

  @Column('varchar', {
    nullable: false,
    name: 'description',
  })
  description!: string;

  @Column('decimal', {
    nullable: false,
    name: 'price',
  })
  price!: number;

  @Column('int', {
    nullable: false,
    name: 'stock_quantity',
  })
  stock_quantity!: number;

  @OneToMany(() => Transaction, (transaction) => transaction.product)
  transactions!: Transaction[];
}

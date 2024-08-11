import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: 'sell' | 'buy';

  @Column()
  quantity!: number;

  @ManyToOne(() => Product, (product) => product.transactions)
  product!: Product;
}

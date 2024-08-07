import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Customer } from './Customer';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number;

  @ManyToOne(() => Product, (product) => product)
  product: Product;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  customer: Customer;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  review_date: Date;
}

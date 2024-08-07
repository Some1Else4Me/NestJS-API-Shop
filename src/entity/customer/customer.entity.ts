import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './Order';
import { Review } from './Review';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];
}

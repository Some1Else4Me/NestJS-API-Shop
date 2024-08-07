import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @ManyToOne(() => Order, (order) => order.payments)
  order: Order;

  @Column()
  payment_date: Date;

  @Column('decimal')
  amount: number;

  @Column()
  payment_method: string;
}

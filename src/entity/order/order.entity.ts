import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';
import { Payment } from './Payment';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @Column()
  order_date: Date;

  @Column('decimal')
  total_amount: number;

  @Column()
  status: string;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];

  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[];
}

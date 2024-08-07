import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  order_detail_id: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order;

  @ManyToOne(() => Product, (product) => product)
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal')
  price: number;
}

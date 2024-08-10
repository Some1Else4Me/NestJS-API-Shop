import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';

@Entity()
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_detail_id!: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order!: Order;

  @ManyToOne(() => Product, (product) => product)
  product!: Product;

  @Column()
  quantity!: number;

  @Column('decimal')
  price!: number;
}

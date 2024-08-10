import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { OrderDetail } from '../order-detail/order-detail.entity';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_id!: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer!: Customer;

  @Column('date', {
    nullable: false,
    name: 'order_date',
  })
  order_date!: Date;

  @Column('decimal', {
    nullable: false,
    name: 'total_amount',
  })
  total_amount!: number;

  @Column('varchar', {
    nullable: false,
    name: 'status',
  })
  status!: string;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails!: OrderDetail[];
}

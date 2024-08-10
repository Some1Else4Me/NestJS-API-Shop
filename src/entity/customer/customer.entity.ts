import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Order } from '../order/order.entity';
@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  customer_id!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name!: string;

  @Column('varchar', {
    nullable: true,
    name: 'email',
  })
  email!: string;

  @Column('varchar', {
    nullable: true,
    length: 10,
    name: 'phone',
  })
  phone!: string;

  @Column('varchar', {
    nullable: true,
    name: 'address',
  })
  address!: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders!: Order[];
}

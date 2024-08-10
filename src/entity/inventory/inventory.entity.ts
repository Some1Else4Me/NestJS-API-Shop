import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  inventory_id!: number;

  @ManyToOne(() => Product, (product) => product)
  product!: Product;

  @Column('int', {
    nullable: false,
    name: 'quantity',
  })
  quantity!: number;

  @Column('date', {
    nullable: false,
    name: 'last_updated',
  })
  last_updated!: Date;
}

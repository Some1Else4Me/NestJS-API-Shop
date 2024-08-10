import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name!: string;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  description!: string;

  @Column('decimal', {
    nullable: false,
    name: 'price',
  })
  price!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  stock_quantity!: number;

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier!: Supplier;
}

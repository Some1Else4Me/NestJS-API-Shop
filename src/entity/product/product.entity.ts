import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Category } from './category';
import { Supplier } from './supplier';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column('decimal')
  price!: number;

  @Column()
  stock_quantity!: number;

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier!: Supplier;
}

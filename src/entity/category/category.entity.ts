import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name!: string;

  @Column('varchar', {
    nullable: false,
    name: 'description',
  })
  description!: string;

  @OneToMany(() => Product, (product) => product.category)
  products!: Product[];
}

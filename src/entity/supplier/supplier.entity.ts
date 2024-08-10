import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn()
  supplier_id!: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name!: string;

  @Column('varchar', {
    nullable: true,
    name: 'contact_info',
  })
  contact_info!: string;

  @Column('varchar', {
    nullable: true,
    name: 'address',
  })
  address!: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products!: Product[];
}

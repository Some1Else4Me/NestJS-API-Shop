import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  supplier_id: number;

  @Column()
  name: string;

  @Column()
  contact_info: string;

  @Column()
  address: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}

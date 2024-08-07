import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  inventory_id: number;

  @ManyToOne(() => Product, (product) => product)
  product: Product;

  @Column()
  quantity: number;

  @Column()
  last_updated: Date;
}

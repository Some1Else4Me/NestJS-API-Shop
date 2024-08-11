import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['transactions'] });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({ where: { product_id: id }, relations: ['transactions'] });
  }

  async create(product: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  async update(id: number, product: Partial<Product>): Promise<Product | null> {
    await this.productRepository.update(id, product);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.productRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}

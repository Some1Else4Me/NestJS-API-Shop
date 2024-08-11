import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProductService } from '../services';
import { Product } from 'src/entity';
import { CreateProductDto } from '../dto'; // Add this import

const pubSub = new PubSub();

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(@Args('createProductInput') createProductInput: CreateProductDto) {
    const product = await this.productService.create(createProductInput);
    await pubSub.publish('productCreated', { productCreated: product }).catch(() => {});
    return product;
  }

  @Subscription(() => Product)
  productCreated() {
    return pubSub.asyncIterator('productCreated');
  }
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Transaction } from 'src/entity';

@ObjectType()
export class ProductModel {
  @Field(() => ID)
  public product_id!: number;

  @Field()
  public name!: string;

  @Field()
  public description!: string;

  @Field()
  public price!: number;

  @Field()
  public stock_quantity!: number;

  @Field(() => [Transaction])
  public transactions!: Transaction[];
}

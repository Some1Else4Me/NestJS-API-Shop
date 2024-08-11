import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  stock_quantity!: number;

  @IsNumber()
  category_id!: number;

  @IsNumber()
  supplier_id!: number;
}

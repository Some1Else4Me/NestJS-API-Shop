import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  stock_quantity?: number;

  @IsNumber()
  @IsOptional()
  category_id?: number;

  @IsNumber()
  @IsOptional()
  supplier_id?: number;
}

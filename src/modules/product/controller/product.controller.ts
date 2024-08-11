import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from '../services';
import { CreateProductDto, UpdateProductDto } from '../dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}

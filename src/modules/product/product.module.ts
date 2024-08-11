import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity';

import { ProductResolver } from './resolver';
import { ProductService } from './services';

/**
 * https://docs.nestjs.com/graphql/quick-start
 */
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      useFactory: async (config: ConfigService) => ({
        ...(await config.get('graphql')),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

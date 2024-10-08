/* eslint-disable @typescript-eslint/no-misused-promises */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config';
import { AuthModule } from './modules/auth';
import { CommonModule, ExceptionsFilter, LoggerMiddleware } from './modules/common';
import { CountryModule } from './modules/country';
import { HealthModule } from './modules/health';
import { InitDbModule } from './modules/init/init.module';
import { ProductModule } from './modules/product';

@Module({
  imports: [
    // https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get('db'),
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../public`,
      renderPath: '/',
    }),
    // Service Modules
    CommonModule, // Global
    HealthModule,
    AuthModule,
    CountryModule,
    ProductModule,
    InitDbModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

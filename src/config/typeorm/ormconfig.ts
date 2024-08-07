import * as dotenv from "dotenv";
import { NamingStrategy } from "src/modules/common/strategies";
import { DataSourceOptions } from "typeorm";

dotenv.config({ path: "../.env" });
const baseOptions = {
  type: process.env.DB_TYPE || "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  timezone: "Z",
  synchronize: false,
  dropSchema: false,
  entities: ["../src/**/*.entity.ts"],
  namingStrategy: new NamingStrategy(),
};

const defaultOptions: DataSourceOptions = {
  ...baseOptions,
  type: "postgres",
  migrationsRun: true,
  logging: true,
  migrationsTableName: "__migrations",
  migrations: ["../migrations/**/*.ts"],
};

const seedOptions: DataSourceOptions = {
  ...baseOptions,
  type: "postgres",
  name: "seed",
  migrationsRun: true,
  logging: true,
  migrationsTableName: "__seeds",
  migrations: ["../seeds/**/*.ts"],
};

export default { defaultOptions, seedOptions };


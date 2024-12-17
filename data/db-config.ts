import { DataSourceOptions } from 'typeorm';

import dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../src/entities/*.{ts,js}'], // Path to your entities
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  synchronize: false,
};

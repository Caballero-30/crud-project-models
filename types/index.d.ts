import 'reflect-metadata';
import typeOrm, { DataSource, ObjectLiteral } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
export type Repository<T extends ObjectLiteral> = typeOrm.Repository<T>;
export declare let dataSource: DataSource;
export declare function initialiseDataSource(options: Omit<PostgresConnectionOptions, 'type'>): Promise<typeOrm.DataSource>;
export * from './entities';
export * from './services';

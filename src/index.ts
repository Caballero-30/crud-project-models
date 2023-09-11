import 'reflect-metadata'
import typeOrm, { DataSource, ObjectLiteral } from 'typeorm'
import * as entities from './entities'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

export type Repository<T extends ObjectLiteral> = typeOrm.Repository<T>

export let dataSource: DataSource

export async function initialiseDataSource(options: Omit<PostgresConnectionOptions, 'type'>) {
	if (!dataSource) {
		dataSource = new DataSource({
			entities: Object.values(entities),
			type: 'postgres',
			...options
		})
		await dataSource.initialize()
	}

	return dataSource
}

export * from './entities'
export * from './services'

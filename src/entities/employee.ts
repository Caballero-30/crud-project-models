import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm'
import { Department } from './department'

@Entity('employee')
export class Employee {
	@PrimaryGeneratedColumn('uuid')
	id: string | null

	@Column({ type: 'varchar', length: 100 })
	names: string

	@Column({ type: 'varchar', length: 100 })
	surname: string

	@Column({ type: 'date' })
	birthDate: Date

	@Column({ type: 'varchar', length: 100 })
	address: string

	@Column({ type: 'varchar', length: 100, unique: true })
	telf: string

	@Column({ type: 'varchar', length: 100, unique: true })
	emailAddress: string

	@Column({ type: 'varchar', length: 100 })
	position: string

	@Column({ type: 'date' })
	hireDate: Date

	@Column({ type: 'decimal', precision: 7, scale: 2 })
	salary: number

	@ManyToOne(() => Department, department => department.employees)
	@JoinColumn()
	department: Department
}
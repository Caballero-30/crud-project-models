import { Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm'
import { Employee } from './employee'

@Entity('department')
export class Department {
	@PrimaryGeneratedColumn('uuid')
	id: string | null

	@Column({ type: 'varchar', length: 100, unique: true })
	name: string

	@Column({ type: 'varchar', length: 100 })
	description: string

	@OneToMany(() => Employee, employee => employee.department)
	@JoinColumn()
	employees: Array<Employee>
}
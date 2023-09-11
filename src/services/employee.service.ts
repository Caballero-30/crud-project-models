import { Repository } from 'typeorm'
import { Employee } from '../entities'

export class EmployeeService {
	constructor(private readonly employeeRepository: Repository<Employee>) {}

	async create(employee: Employee) {
		return await this.employeeRepository.save(employee)
	}

	async findAll() {
		return await this.employeeRepository.find({
			relations: ['department']
		})
	}

	async findOne(id: string) {
		const employee = await this.employeeRepository.findOne({
			where: { id },
			relations: ['department']
		})
		if (!employee) throw new Error(`Employee ${id} not found`)

		return employee
	}

	async update(employee: Partial<Employee> & { id: string }) {
		const found = await this.findOne(employee.id)
		return await this.employeeRepository.save({
			...found,
			...employee
		})
	}

	async delete(id: string) {
		const deletedEmployee = await this.employeeRepository.delete({ id })
		if (deletedEmployee.affected === 0) throw new Error(`Employee ${id} not found`)

		return deletedEmployee
	}
}
import { Repository } from 'typeorm'
import { Department } from '../entities'

export class DepartmentService {
	constructor(private readonly departmentRepository: Repository<Department>) {}

	async create(department: Department) {
		return await this.departmentRepository.save(department)
	}

	async findAll() {
		return await this.departmentRepository.find({
			relations: ['employees']
		})
	}

	async findOne(id: string) {
		const department = await this.departmentRepository.findOne({
			where: { id },
			relations: ['employees']
		})
		if (!department) throw new Error(`Department ${id} not found`)

		return department
	}

	async update(department: Partial<Department> & { id: string }) {
		const found = await this.findOne(department.id)
		return await this.departmentRepository.save({
			...found,
			...department
		})
	}

	async delete(id: string) {
		const deletedDepartment = await this.departmentRepository.delete({ id })
		if (deletedDepartment.affected === 0) throw new Error(`Department ${id} not found`)

		return deletedDepartment
	}
}
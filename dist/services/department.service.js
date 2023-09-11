"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async create(department) {
        return await this.departmentRepository.save(department);
    }
    async findAll() {
        return await this.departmentRepository.find({
            relations: ['employees']
        });
    }
    async findOne(id) {
        const department = await this.departmentRepository.findOne({
            where: { id },
            relations: ['employees']
        });
        if (!department)
            throw new Error(`Department ${id} not found`);
        return department;
    }
    async update(department) {
        const found = await this.findOne(department.id);
        return await this.departmentRepository.save(Object.assign(Object.assign({}, found), department));
    }
    async delete(id) {
        const deletedDepartment = await this.departmentRepository.delete({ id });
        if (deletedDepartment.affected === 0)
            throw new Error(`Department ${id} not found`);
        return deletedDepartment;
    }
}
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map
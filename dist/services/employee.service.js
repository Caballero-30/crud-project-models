"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(employee) {
        return await this.employeeRepository.save(employee);
    }
    async findAll() {
        return await this.employeeRepository.find({
            relations: ['department']
        });
    }
    async findOne(id) {
        const employee = await this.employeeRepository.findOne({
            where: { id },
            relations: ['department']
        });
        if (!employee)
            throw new Error(`Employee ${id} not found`);
        return employee;
    }
    async update(employee) {
        const found = await this.findOne(employee.id);
        return await this.employeeRepository.save(Object.assign(Object.assign({}, found), employee));
    }
    async delete(id) {
        const deletedEmployee = await this.employeeRepository.delete({ id });
        if (deletedEmployee.affected === 0)
            throw new Error(`Employee ${id} not found`);
        return deletedEmployee;
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
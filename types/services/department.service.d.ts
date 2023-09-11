import { Repository } from 'typeorm';
import { Department } from '../entities';
export declare class DepartmentService {
    private readonly departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    create(department: Department): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: string): Promise<Department>;
    update(department: Partial<Department> & {
        id: string;
    }): Promise<{
        id: string;
        name: string;
        description: string;
        employees: import("../entities").Employee[];
    } & Department>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}

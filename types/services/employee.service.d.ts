import { Repository } from 'typeorm';
import { Employee } from '../entities';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(employee: Employee): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    update(employee: Partial<Employee> & {
        id: string;
    }): Promise<{
        id: string;
        names: string;
        surname: string;
        birthDate: Date;
        address: string;
        telf: string;
        emailAddress: string;
        position: string;
        hireDate: Date;
        salary: number;
        department: import("../entities").Department;
    } & Employee>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}

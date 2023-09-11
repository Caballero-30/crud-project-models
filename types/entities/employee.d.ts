import { Department } from './department';
export declare class Employee {
    id: string | null;
    names: string;
    surname: string;
    birthDate: Date;
    address: string;
    telf: string;
    emailAddress: string;
    position: string;
    hireDate: Date;
    salary: number;
    department: Department;
}

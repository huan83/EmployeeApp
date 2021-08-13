export class Employee {
    id:number;
    Firstname:string;
    Lastname: string;
    Salary:number;
    Department:string;

    constructor(id:number, firstname:string, lastname:string, salary:number, department:string){
        this.id = id;
        this.Firstname = firstname;
        this.Lastname = lastname;
        this.Salary = salary;
        this.Department = department;
    }
}

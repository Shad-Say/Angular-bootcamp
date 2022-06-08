import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee: Employee = {
    sno: 'aa101',
    name: 'john',
    age: 35,
    designation: 'Tech Lead',
    doj: new Date(),
    salary: 450000,
  };

  constructor() {}

  public getEmployee(): Employee {
    return this.employee;
  }
}

import { Component, OnInit } from '@angular/core';
import Employee from './Employee';

@Component({
  selector: 'app-get-by-product-id',
  templateUrl: './get-by-product-id.component.html',
  styleUrls: ['./get-by-product-id.component.css']
})
export class GetByProductIdComponent implements OnInit {

  Employees: Employee[] = [];
  foundEmployee: any;

  constructor() {
    // ---------
    this.Employees = [
      new Employee(
        1,
        'Sujit Shibaprasad Maity',
        5002552,
        'Male',
        '07/18/2018',
        'sujitmaity.rs@gmail.com',
        'iamsspm07'
      ),
      new Employee(
        2,
        'Abhishek',
        45000,
        'Male',
        '07/18/2018',
        'abhishek@gmail.com',
        '123456'
      )
    ];

    this.foundEmployee = null;
  }

  ngOnInit(): void {}

  getEmployee(employee: any) {
    this.Employees.forEach((emp) => {
      if (emp.empNo == employee.empid) {
        this.foundEmployee = emp;
      }
    });

    if ((this.foundEmployee == null)) {
      alert('Employee not found');
    }
  }
}

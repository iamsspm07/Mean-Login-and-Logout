import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : any;
  constructor() {
    this.employee = [
      {EmployeeId : 1, EmployeeName : "Sujit", EmployeeSalary : 39666, EmployeeGander : "Male", EmployeeDOJ : "18 Jan 2010", LoginId : "sujit@1", Password : "sujit@1"},
      {EmployeeId : 2, EmployeeName : "Kartik", EmployeeSalary : 39666, EmployeeGander : "Male", EmployeeDOJ : "18 Feb 2012", LoginId : "kartik@1", Password : "kartik@1"},
      {EmployeeId : 3, EmployeeName : "Saurabh", EmployeeSalary : 39666, EmployeeGander : "Male", EmployeeDOJ : "18 may 2014", LoginId : "saurabh@1", Password : "saurabh@1"},
      {EmployeeId : 4, EmployeeName : "Bhargavi", EmployeeSalary : 39666, EmployeeGander : "Female", EmployeeDOJ : "18 Sep 2022", LoginId : "bhargavi@1", Password : "bhargavi@1"}
  ]
  }

  ngOnInit(): void {
  }

  // showDetails(){
  //   // console.log(this.employee);
  // }

}

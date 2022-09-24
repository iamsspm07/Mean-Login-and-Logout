import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  student : any;
  constructor() { 
    this.student =[{}]
  }

  ngOnInit(): void {
  }

  displayStudents(regForm : any){
    this.student.push(regForm)
    console.log(this.student)
    alert("Student Add Successfully!!!")
  }
}

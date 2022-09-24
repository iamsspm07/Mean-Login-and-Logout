import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student : any;
  constructor() { 
    this.student = [{stdId: 1, stdName: "sujit", stdDob: "03-22-2000", stdCourse: "Python", stdFees: 120000},
                    {stdId: 2, stdName: "saurab", stdDob: "05-22-2001", stdCourse: "Java", stdFees: 130000},
                    {stdId: 3, stdName: "kartik", stdDob: "05-22-2002", stdCourse: "Bootcamp", stdFees: 140000},
                    {stdId: 4, stdName: "bhargavi", stdDob: "06-22-2003", stdCourse: "Angular", stdFees: 150000}];
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../productserv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  student : any;
  add : any;
  countries: any[];
  constructor(private service : ProductservService,private httpClient: HttpClient) {
    this.add = this.student=[];
    this.countries = [];
    // this.student = [{stdId: 1, stdName: 'Sujit', stdDOB: '03-22-2000', stdCourse: 'CS', stdFee: 150000},
    //                 {stdId: 2, stdName: 'Kartik', stdDOB: '08-22-1999', stdCourse: 'EEE', stdFee: 150000},
    //                 {stdId: 3, stdName: 'Saurab', stdDOB: '04-22-1998', stdCourse: 'EXTC', stdFee: 150000},
    //                 {stdId: 4, stdName: 'Sriman', stdDOB: '05-22-2001', stdCourse: 'IF', stdFee: 150000}];
   }
  
   ngOnInit(): void {
    this.service.getCountries().subscribe((data: any) => {
      data.forEach((country:any)=> {
        this.countries.push(country.name);
      })
    })
  }

  submitForm(regForm: any){
    this.add = {"stdId":regForm.stdId,"stdName":regForm.stdName,"stdDOB":regForm.stdDOB,"stdCourse":regForm.stdCourse,"stdFee":regForm.stdFee,"Country":regForm.country}
    this.student.push(this.add);
    console.log(this.student);
    alert("Add Successfully!!!!!")
    
  }
 
  
}

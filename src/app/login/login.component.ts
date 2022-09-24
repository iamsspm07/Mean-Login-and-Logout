import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonGuard } from '../authon.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginId: string;
  // password: string;
  student: any;
  isTrue: boolean;
  constructor(private security : AuthonGuard,private route : Router) { //Dependency Injection
    // this.loginId="";
    this.isTrue = false;
    // this.password="";
    this.student = [{stdId: 1, stdName: "sujit", stdDob: "03-22-2000", stdCourse: "Python", stdFees: 120000, stdUId:"sujit1",password:'1234'},
                    {stdId: 2, stdName: "saurab", stdDob: "05-22-2001", stdCourse: "Java", stdFees: 130000,stdUId:"saurab1",password:'1234'},
                    {stdId: 3, stdName: "kartik", stdDob: "05-22-2002", stdCourse: "Bootcamp", stdFees: 140000,stdUId:"kartik1",password:'1234'},
                    {stdId: 4, stdName: "bhargavi", stdDob: "06-22-2003", stdCourse: "Angular", stdFees: 150000,stdUId:"bhargavi1",password:'1234'}];
  }

  ngOnInit(): void {
  }

  showMessage(loginForm:any){
    if (loginForm.loginId === "HR" && loginForm.password === "HR") {
      this.isTrue = true;
      this.security.isUserLoggedIn = true;
      alert('HR login successfully!!')
      this.route.navigate(['product'])
    }
    else{
      this.student.forEach((std: any) =>{
        if (loginForm.loginId === std.stdUId && loginForm.password === std.password) {
          this.isTrue = true;
          this.security.isUserLoggedIn = true;
          alert('Student login successfully!!!')
          this.route.navigate(['product'])
        }
      })
    }
    if(!this.isTrue)
    alert("Ivalid Information")
  }
 
}
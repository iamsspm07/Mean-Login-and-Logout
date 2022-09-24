import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth2Guard } from '../auth2.guard';
import { AuthonGuard } from '../authon.guard';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth1: AuthonGuard, private auth2: Auth2Guard, private router: Router) { }

  ngOnInit(): void {
    this.auth1.isUserLoggedIn = false;
    alert("Logout Sucess!!")
    this.auth2.isUserLogout = true;
    this.router.navigate(['login'])
  }

}

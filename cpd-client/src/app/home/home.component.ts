import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginData: any;

  constructor(
    private cookieService: CookieService,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.loginData = this.cookieService.getObject('loginData');
    console.log(this.loginData);
  }

  onClick() {
    this.router.navigate(['login']);
  }
  toOverview() {
    this.router.navigate(['contact-us']);
  }
  toDetails() {
    this.router.navigate(['products']);
  }
  toJoin() {
    this.router.navigate(['login']);
  }

}

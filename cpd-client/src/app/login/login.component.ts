import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginSuccess: boolean;
  user: any = {};
  constructor(private router: Router, private http: HttpClient) { }

  onClick() {
    this.router.navigate(['register']);
  }
  ngOnInit() {
    this.isLoginSuccess = true;
  }

  onLogin(loginData: any) {
    console.log(loginData);
    return this.http.post(
      environment.apiURL + '/login',
      loginData,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    )
      .subscribe(
      res => {
        console.log(res);
        // console.log(res);
        //if(!res.isLoginSuccess){
          this.isLoginSuccess = false;
        //} else {
        //  this.router.navigate(['home']);
        //}

        this.user = {};
      },
      err => {
        console.log(err);
      }
      )
  }

}

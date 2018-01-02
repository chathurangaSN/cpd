import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';
import 'rxjs/Rx';
import { AppCommonService } from '../app-common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginFormSubmited: boolean;
  isLoginSuccess: boolean;
  user: any = {};
  constructor(
    private router: Router, 
    private http: HttpClient,
    private cookieService: CookieService,
    private appCommonService: AppCommonService
  ) { }

  onClick() {
    this.router.navigate(['register']);
  }
  ngOnInit() {
    this.isLoginFormSubmited = false;

    this.isLoginSuccess = true;
  }

  onLogin(loginForm: any) {
    console.log(loginForm);
    this.isLoginFormSubmited = true;
    if (loginForm.valid) {
      return this.http.post(
        environment.apiURL + '/login',
        loginForm.value,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
        .subscribe( res => {
          console.log(res);
          // console.log(res);
          if ( res.isLoginSuccess === false) {
            this.isLoginSuccess = false;
          } else {
            this.router.navigate(['home']);
            this.user = {};
            this.cookieService.putObject( 'loginData', res);
            this.appCommonService.IsUserLoggedIn = true;
          }

        },
        err => {
          console.log(err);
        });
    }
  }

}

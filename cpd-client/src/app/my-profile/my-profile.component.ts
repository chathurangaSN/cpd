import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  isLoginSuccess: boolean;
  isRegFormSubmited: boolean;

  loggedUserData: any;
  isUserLogged: boolean;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {


    if (this.cookieService.getObject('loginData')) {
      this.loggedUserData = this.cookieService.getObject('loginData');
      console.log(this.loggedUserData.user);

    }
  }
  // onSubmit(form: any) {
  //   this.isRegFormSubmited = true;
  //   console.log(form.files);
  //   if (form.valid) {
  //     return this.http.post(
  //       environment.apiURL + '/profile',
  //       form.files,
  //       { headers: new HttpHeaders().set('Content-Type', 'application/json') }
  //     )
  //       .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log(err);

  //       });
  //   }

  // }
}
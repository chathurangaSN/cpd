import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { HttpModule } from '@angular/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  isLoginSuccess: boolean;
  isLoginFail: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.isLoginSuccess = false;
    this.isLoginFail = false;
  }

  onSubmit(value: any) {
    console.log(value);
    return this.http.post(
      environment.apiURL + '/user',
      value,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    )
      .subscribe(
      res => {
        console.log(res);
        // this.router.navigate(['login']);
        this.user = {};
        this.isLoginSuccess = true;
        this.isLoginFail = false;
        window.scrollTo(0, 0);
      },
      err => {
        console.log(err);
        this.isLoginSuccess = false;
        this.isLoginFail = true;
        window.scrollTo(0, 0);
      }
      )


  }


  ngOnInit() {
  }

}

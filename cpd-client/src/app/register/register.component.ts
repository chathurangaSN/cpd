import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  onSubmit(value: any) {
    console.log(value);
    return this.http.post( 
      environment.apiURL + '/user', 
      value, 
      { headers: new HttpHeaders().set('Content-Type', 'application/json')}
    )
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
      )


  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpModule } from '@angular/http';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:Http) { }

  onSubmit(value:any){
    console.log(value);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(value);
      return this.http.post('environment.apiURL + /product', body, options )
      .subscribe(
        res =>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      //.map((res: Response) => res.json());
      
  
  }


  ngOnInit() {
  }

}

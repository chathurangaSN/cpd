import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-new',
  templateUrl: './admin-product-new.component.html',
  styleUrls: ['./admin-product-new.component.css']
})
export class AdminProductNewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    return this.http.post(
      environment.apiURL + '/product',
      value,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
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

}

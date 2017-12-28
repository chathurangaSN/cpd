import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  onSubmit(value: any) {
    console.log(value);
    return this.http.post( 
      environment.apiURL + '/product', 
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

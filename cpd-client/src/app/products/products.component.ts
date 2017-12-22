import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/product').subscribe(data => {
      // Read the result field from the JSON response.
     console.log(data);
     this.products = data;
    });
  }

}

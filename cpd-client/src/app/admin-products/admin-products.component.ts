import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/product').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.products = data;
    });
  }

  showDetail(product) {
    this.router.navigate(['admin/products-detail/' + product._id]);
  }

}

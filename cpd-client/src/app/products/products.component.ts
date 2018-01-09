import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  baseProductList: any;

  products: any;
  searchText: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/product').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.products = data;
      this.baseProductList = this.products;
      
    });
  }
  post() {

  }

  showDetail(product) {
    this.router.navigate(['products/detail/' + product._id]);
  }
  editDetail(product) {
    this.router.navigate(['admin/' + product._id]);

  }
  delete() {
    this.router.navigate(['home']);

  }

  addProduct() {
    this.router.navigate(['admin']);
  }

  fiterByName(searchText) {
    console.log(searchText);
    if (searchText.length > 0) {
      this.products = this.baseProductList.filter(x => x.productName.toLowerCase().startsWith(searchText.toLowerCase()))
    } else {
      this.products = this.baseProductList;
    }
  }

  filterByType(type){
    console.log(type);
    this.products = this.baseProductList.filter(x => x.productType.toLowerCase().startsWith(type.toLowerCase()))
    
  }



}

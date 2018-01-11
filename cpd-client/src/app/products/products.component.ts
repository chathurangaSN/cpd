import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  healthCount: any;
  giftCount: any;
  savouryCount: any;
  crackerCount: any;
  creamCount: any;
  puffCount: any;
  sweetCount: any;
  rangeTitle: string;
  baseProductList: any;

  products: any;
  searchText: string;
  isLoginSuccess: boolean;
  isSweetRange: boolean;
  isPuffRange: boolean;
  isCreamRange: boolean;
  isCrackerRange: boolean;
  isSavouryRange: boolean;
  isGiftRange: boolean;
  isHealthRange: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    if (cookieService.getObject('loginData')) {
      this.isLoginSuccess = true;
    }

  }

  ngOnInit() {
    this.http.get(environment.apiURL + '/product').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.products = data;
      this.sweetCount = this.products.filter(x=> x.productType.toUpperCase() ==='SWEET').length;
      this.puffCount = this.products.filter(x=> x.productType.toUpperCase() ==='PUFF').length;
      this.creamCount = this.products.filter(x=> x.productType.toUpperCase() ==='CREAM').length;
      this.crackerCount = this.products.filter(x=> x.productType.toUpperCase() ==='CRACKER').length;
      this.savouryCount = this.products.filter(x=> x.productType.toUpperCase() ==='SAVOURY').length;
      this.giftCount = this.products.filter(x=> x.productType.toUpperCase() ==='GIFT').length;
      this.healthCount = this.products.filter(x=> x.productType.toUpperCase() ==='HEALTH').length;
      
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
    this.rangeTitle = '';
    if (searchText.length > 0) {
      this.products = this.baseProductList.filter(x => x.productName.toLowerCase().startsWith(searchText.toLowerCase()))
    } else {
      this.products = this.baseProductList;
    }
  }

  filterByType(type) {
    console.log(type);
    this.products = this.baseProductList.filter(x => x.productType.toLowerCase().startsWith(type.toLowerCase()))
    switch (type) {
      case 'SWEET':
      this.rangeTitle = 'Sweet Range'
        
        break;
      case 'PUFF':
      this.rangeTitle = 'Puff Range'
      
        break;
      case 'CREAM':
      this.rangeTitle = 'Cream Range'
      
        break;
      case 'CRACKER':
      this.rangeTitle = 'Cracker Range'
      
        break;
      case 'SAVOURY':
      this.rangeTitle = 'Savoury Range'
      
        break;
      case 'GIFT':
      this.rangeTitle = 'Gift Range'
      
        break;
      case 'HEALTH':
      this.rangeTitle = 'Health Range'
      
        break;

      default:
        this.isSweetRange = false;
        this.isPuffRange = false;
        this.isCreamRange = false;
        this.isCrackerRange = false;
        this.isSavouryRange = false;
        this.isGiftRange = false;
        this.isHealthRange = false;

        break;
    }
  }



}

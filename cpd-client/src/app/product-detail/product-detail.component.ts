import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppCommonService } from '../app-common.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],

})
export class ProductDetailComponent implements OnInit {

  productId: any;
  product?: any;
  quntity: number;
  cartItems: any = [];
  isLoginSuccess:boolean;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    private appCommonService: AppCommonService,
    private router: Router) {
      if (cookieService.getObject('loginData')) {
        this.isLoginSuccess = true;
      }
     }

  ngOnInit() {
    this.quntity = 1;
    if(this.cookieService.getObject('cartItems')){
      this.cartItems = this.cookieService.getObject('cartItems');
      console.log(this.cookieService.getObject('cartItems'));
      
    }
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.http.get(environment.apiURL + '/product/' + this.productId).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
        this.product = data;
        // this.productForm.value
      });
    });

  }

  addToCart(product, quntity) {
    this.router.navigate(['cart']);
    console.log(product);
    console.log(quntity);
    this.cartItems.push({
      product: product,
      quntity: quntity
    });
    this.appCommonService.CartItems = this.cartItems;

  }

}

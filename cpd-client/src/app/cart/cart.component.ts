import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { AppCommonService } from '../app-common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isOderSuccess: boolean;
  loggedUserData: any;
  isUserLogged: boolean;
  cartItems: any = [];
  total: number;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private appCommonService: AppCommonService
  ) { }


  ngOnInit() {
    this.isUserLogged = false;
    this.isOderSuccess = false;
    
    this.total = 0;
    console.log(this.cookieService.getObject('cartItems'));
    if (this.cookieService.getObject('cartItems')) {
      this.cartItems = this.cookieService.getObject('cartItems');
    }
    this.cartItems.forEach(item => {
      console.log(item);
      this.total = this.total + item.product.unitPrize * item.quntity;
    });

    if (this.cookieService.getObject('loginData')) {
      this.isUserLogged = true;
      this.loggedUserData = this.cookieService.getObject('loginData');

    }
  }

  placeOrder() {
    console.log(this.isUserLogged);
    if (this.isUserLogged) {
      const body = {
        userId: this.loggedUserData.user._id,
        orderItems: this.cartItems
      };

      console.log(body);
      return this.http.post(
        environment.apiURL + '/order',
        body,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
        .subscribe(
        res => {
          console.log(res);
          this.cookieService.remove('cartItems');
          this.appCommonService.CartItems = [];
          this.isOderSuccess = true;
         },
        err => { }
        );
    } else {
      this.router.navigate(['login']);
    }


  }

}

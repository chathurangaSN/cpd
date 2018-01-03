import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { AppCommonService } from '../app-common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private appCommonService: AppCommonService
  ) { }

  ngOnInit() {
    console.log(this.cookieService.getObject('cartItems'));
    this.cartItems = this.cookieService.getObject('cartItems');
    
  }

}

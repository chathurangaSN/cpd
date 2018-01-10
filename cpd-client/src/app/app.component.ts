import { Component } from '@angular/core';
import { AppCommonService } from './app-common.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cartItems?: any;
  loggedUserData: any;
  isLoginSuccess: boolean;
  isDisplayAdminMenu: boolean;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private appCommonService: AppCommonService
  ) {
    this.isDisplayAdminMenu = false;

    //Check user already logged in by using cookies
    if (cookieService.getObject('loginData')) {
      this.isLoginSuccess = true;
      this.loggedUserData = cookieService.getObject('loginData');
      console.log(this.loggedUserData.user);
      if (this.loggedUserData.user.userRole === 0) {
        this.isDisplayAdminMenu = true;
      } else {
        this.isDisplayAdminMenu = false;
      }
    } else {
      this.isLoginSuccess = false;
    }

    //Trigger when user successfully logged in
    appCommonService.onLogginSuccess.subscribe(
      res => {
        this.isLoginSuccess = res;
        if (cookieService.getObject('loginData')) {
          this.isLoginSuccess = true;
          this.loggedUserData = cookieService.getObject('loginData');
          console.log(this.loggedUserData.user);
          if (this.loggedUserData.user.userRole === 0) {
            this.isDisplayAdminMenu = true;
          } else {
            this.isDisplayAdminMenu = false;
          }
        }
      }
    );

    this.cartItems = this.cookieService.getObject('cartItems');

    this.appCommonService.onCartItemAdd.subscribe(
      res => {
        this.cartItems = res;
      }
    )
  }

  userLogOut() {
    this.isLoginSuccess = false;
    this.appCommonService.IsUserLoggedIn = false;
    this.cookieService.remove('loginData');
    this.router.navigate(['home/']);

  }

  loadCartView() {
    this.router.navigate(['cart']);
  }

  getOrders() {
    this.router.navigate(['orders/']);
  }

}

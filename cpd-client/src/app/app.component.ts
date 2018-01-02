import { Component } from '@angular/core';
import { AppCommonService } from './app-common.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedUserData: any;
  isLoginSuccess: boolean;
  isDisplayAdminMenu: boolean;
  constructor(
    private cookieService: CookieService,
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
    )
  }

  userLogOut() {
    this.isLoginSuccess = false;
    this.appCommonService.IsUserLoggedIn = false;
    this.cookieService.removeAll();
  }

}

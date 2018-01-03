import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AppCommonService {

  private isUserLoggedIn: boolean;
  
  set IsUserLoggedIn(isUserLoggedIn: boolean) {
    this.onLogginSuccess.next(isUserLoggedIn);
    this.isUserLoggedIn = isUserLoggedIn;
  }
  
  get IsUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  private cartItems: any[];

  set CartItems(cartItems){
    this.cartItems = cartItems;
    this.cookieService.putObject('cartItems', this.cartItems);
  }

  get CartItems(){
    return this.cartItems;
  }
  
  public onLogginSuccess = new Subject<boolean>();

  constructor(    
    private cookieService: CookieService
  ) { }

}

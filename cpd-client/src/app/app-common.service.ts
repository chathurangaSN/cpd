import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
  
  public onLogginSuccess = new Subject<boolean>();

  constructor() { }

}

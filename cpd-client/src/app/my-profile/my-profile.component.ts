import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  loggedUserData: any;
  isUserLogged: boolean;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {

    if (this.cookieService.getObject('loginData')) {
      this.loggedUserData = this.cookieService.getObject('loginData');
      console.log(this.loggedUserData.user);
     
    }
  }


}

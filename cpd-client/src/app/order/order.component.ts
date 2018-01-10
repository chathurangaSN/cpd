import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  loggedUserData: any;
total:number;
  orders: any;
  
  
  constructor(    
    private cookieService: CookieService,
    private http: HttpClient, 
    private router: Router) { }

  ngOnInit() {

    if (this.cookieService.getObject('loginData')) {
      this.loggedUserData = this.cookieService.getObject('loginData');
      
      console.log(this.loggedUserData.user);
     
    }

    this.http.get(environment.apiURL + '/orderbyuser/'+ this.loggedUserData.user._id).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.orders = data;


      
    });
  }

}

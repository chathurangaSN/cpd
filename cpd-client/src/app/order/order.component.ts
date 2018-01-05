import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  orders: any;
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/order').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.orders = data;
      
    });
  }

}

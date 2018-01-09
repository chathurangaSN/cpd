import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/order').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.orders = data;

    });
  }

  saveOrderState(item) {
    console.log(item);
    this.http.put(
      environment.apiURL + '/order',
      item,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
        

      });

  }

}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  customers:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/user').subscribe(data => {
      // Read the result field from the JSON response.
     console.log(data);
     this.customers = data;
    });

}

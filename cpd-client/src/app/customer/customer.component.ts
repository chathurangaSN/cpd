import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/user').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.customers = data;
    });
  }
  post() {

  }

  editDetail(user) {
    this.router.navigate(['register/' + user._id]);
  }
  showDetail(user) {
    this.router.navigate(['customer/detail/' + user._id]);
  }
  delete(user) {

    this.http.request(
      'delete',
      environment.apiURL + '/user',
      { body: user })
      .subscribe(
      data => {
        this.http.get(environment.apiURL + '/user').subscribe(data => {
          // Read the result field from the JSON response.
          console.log(data);
          this.customers = data;

        });

      });
      window.location.reload();


  }

}







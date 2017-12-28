import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product?: Object;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let productId = params['id'];
      this.http.get(environment.apiURL + '/product/'+  productId).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
        this.product = data;
        // this.productForm.value
      });
    });
    
    
  }

  onSubmit(value: any) {
    console.log(value);
    return this.http.post(
      environment.apiURL + '/product',
      value,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    )
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
      )
  }

 

}

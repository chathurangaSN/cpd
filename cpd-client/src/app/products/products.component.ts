import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/product').subscribe(data => {
      // Read the result field from the JSON response.
     console.log(data);
     this.products = data;
    });
  }
  post(){
    
  }

  showDetail(product){
    this.router.navigate(['products/detail/'+ product._id]);
  }
  editDetail(product){
    this.router.navigate(['admin/'+ product._id]);
    
  }

  addProduct(){
    this.router.navigate(['admin']);
  }



}

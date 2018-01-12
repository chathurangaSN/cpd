import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-new',
  templateUrl: './admin-product-new.component.html',
  styleUrls: ['./admin-product-new.component.css']
})
export class AdminProductNewComponent implements OnInit {
  //product: any;
  //productImage: any;
  //uploadRes: Object;
  //fileToUpload: File=null;


  ingrediants: any[] = [{ value: '' }];
  productType: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.productType = 'SWEET';
  }

  onSubmit(value: any) {
    console.log(value);
    value.ingredient = this.ingrediants;
    console.log(this.ingrediants);
    return this.http.post(
      environment.apiURL + '/product',
      value,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    )
      .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['admin/products']);
        window.scrollTo(0, 0);
      },
      err => {
        console.log(err);
      }
      )
  }

  newIngredient() {
    this.ingrediants.push({ value: '' });
  }
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  // }

  // uploadFile() {
  //   const formData: FormData = new FormData();

  //   formData.append('image', this.fileToUpload, this.fileToUpload.name);

  //   return this.http.post(
  //     environment.apiURL + '/uploads',
  //     formData
  //   )
  //     .subscribe(

  //     res => {
  //       console.log(res);
        
  //       this.uploadRes = res
  //       this.product.productImage = this.uploadRes.productImage;
  //       // update user profile url
  //       this.http.put(
  //         environment.apiURL + '/user',
  //         this.loggedUserData.user
  //       )
  //         .subscribe(
  //         res => {

  //         }
  //         )
  //     },
  //     err => {
  //       console.log(err);

  //     });
  // }




}

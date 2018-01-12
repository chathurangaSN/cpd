import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  isLoginSuccess: boolean;
  isRegFormSubmited: boolean;
  loggedUserData: any;
  uploadRes: any;
  isUserLogged: boolean;

  fileToUpload: File = null;
  imageServerUrl: string;
  image: any;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router

  ) { }

  ngOnInit() {
    this.imageServerUrl = environment.imagesURL;

    if (this.cookieService.getObject('loginData')) {
      this.loggedUserData = this.cookieService.getObject('loginData');
      console.log(this.loggedUserData.user);

    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }



  uploadFile() {
    const formData: FormData = new FormData();

    formData.append('image', this.fileToUpload, this.fileToUpload.name);

    return this.http.post(
      environment.apiURL + '/uploads',
      formData
    )
      .subscribe(

      res => {
        console.log(res);
        
        this.uploadRes = res
        this.loggedUserData.user.profileImage = this.uploadRes.profileImage;
        // update user profile url
        this.http.put(
          environment.apiURL + '/user',
          this.loggedUserData.user
        )
          .subscribe(
          res => {

          }
          )
      },
      err => {
        console.log(err);

      });
  }




}
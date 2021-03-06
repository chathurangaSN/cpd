import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminOrderDetailComponent } from './admin-order-detail/admin-order-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AdminProductNewComponent } from './admin-product-new/admin-product-new.component';
import { AppCommonService } from './app-common.service';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    OrderComponent,
    OrderConfirmationComponent,
    OrderListComponent,
    OrderDetailComponent,
    RegisterComponent,
    MyProfileComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    AdminOrdersComponent,
    AdminOrderDetailComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AdminHomeComponent,
    CustomerComponent,
    CustomerDetailComponent,
    AdminProductNewComponent,
    CartComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
    AngularFontAwesomeModule
   
  ],
  providers: [
    AppCommonService
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

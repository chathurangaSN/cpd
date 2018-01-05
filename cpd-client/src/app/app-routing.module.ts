import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AdminProductNewComponent } from './admin-product-new/admin-product-new.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'products/detail/:id',      component: ProductDetailComponent },
  { path: 'products/order',      component: OrderComponent },
  { path: 'products/order-confirmation',      component: OrderConfirmationComponent },
  { path: 'orders',      component:  OrderComponent },
  { path: 'orders/detail/:id',      component: OrderDetailComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'register/:id',      component: RegisterComponent },
  { path: 'customer',      component: CustomerComponent  },
  { path: 'customer/detail/:id',      component: CustomerDetailComponent },
  { path: 'me',      component: MyProfileComponent },
  {path:'me/:id', component:MyProfileComponent},
  { path: 'login',      component: LoginComponent },
  { path: 'admin',      component: AdminProductsComponent },
  { path: 'admin/products',      component: AdminProductsComponent },
  { path: 'admin/product-new',      component: AdminProductNewComponent },
  { path: 'admin/products-detail/:id',      component: AdminProductDetailComponent },
  { path: 'admin/orders',      component: AdminOrdersComponent },
  { path: 'admin/order/:id',      component: AdminOrderDetailComponent },
  { path: 'contact-us',      component: ContactUsComponent },
  { path: 'cart',      component: CartComponent },
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

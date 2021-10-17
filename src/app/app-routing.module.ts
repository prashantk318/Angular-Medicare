import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ManageProductComponent } from './manage-products/manage-products.component';

import { ContactComponent } from './contact/contact.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:'',
component:HomeComponent},
  {
    path:'signup', component:SignupComponent,
    pathMatch:'full',
  },
  {path:'login', component:LoginComponent,pathMatch:'full'},
  {path:'admin', component:DashboardComponent, pathMatch:'full', canActivate:[AdminGuard] },
  {path:'user-dashboard', component:UserdashboardComponent, pathMatch:'full', canActivate: [NormalGuard]},
  {path:'contact', component:ContactComponent},
  {path:'manage-products', component:ManageProductComponent, canActivate:[AdminGuard]},
  {path:'create-product', component:CreateProductComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'update-product/:id', component:UpdateProductsComponent},
  {path:'product-details/:id', component:ProductdetailsComponent},
  {path:'paymentdetails', component:PaymentDetailsComponent},
  {path:'payment-success', component:PaymentSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

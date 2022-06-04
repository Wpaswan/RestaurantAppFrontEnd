import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { GetAllItemsComponent } from './get-all-items/get-all-items.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  // { path:'', redirectTo:"/dashboard", pathMatch:'full'}, //this is done so whenever we will do ng serve at first login page should open and then after logging in we should get redirected to dashboard page
  { path:'sign-up',component:SignUpComponent,
  children: [
    { path: 'login', component: LoginComponent
   },  
  ],},
  { path:'', redirectTo:"/login", pathMatch:'full'}, //this is done so whenever we will do ng serve at first login page should open and then after logging in we should get redirected to dashboard page
  { path:'sign-up',component:SignUpComponent},
  {path: 'login', component: LoginComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
  { path:'', redirectTo:"/dashboard/get-all-items", pathMatch:'full'},
  { path:'get-all-items',component:GetAllItemsComponent},
  { path:'quickview/:ItemId',component:QuickviewComponent},
  { path:'my-orders',component:MyOrdersComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

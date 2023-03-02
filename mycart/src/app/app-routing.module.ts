import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { AllProductsComponent } from './dashboard/all-products/all-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateProductComponent } from './dashboard/update-product/update-product.component';
import { DefaultComponent } from './default/default.component';
import { HomeGuardGuard } from './home-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-register',
    component: RegisterComponent
  },
  {
    path: 'app-home',
    component: HomeComponent,
    canActivate: [HomeGuardGuard]
  },
  {
    path: '',
    component: DefaultComponent,

  },
  {
    path: 'app-dashboard',
    component: DashboardComponent,
  
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'update-product/:id',
        component: UpdateProductComponent,

      },
      {
        path: '',
        component: AllProductsComponent,

      },
      
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

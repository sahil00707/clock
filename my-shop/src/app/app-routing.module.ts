import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {MyguardGuard} from './myguard.guard'
const routes: Routes = [

  {
    path:'app-register',
    component:RegisterComponent
  },
  {
    path:'app-login',
    component:LoginComponent
  },
  
  {
    path:'app-home',
    component:HomeComponent,
    canActivate:[MyguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

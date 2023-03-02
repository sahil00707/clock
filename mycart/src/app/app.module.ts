import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { AllProductsComponent } from './dashboard/all-products/all-products.component';
import { UpdateProductComponent } from './dashboard/update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DefaultComponent,
    AddProductComponent,
    AllProductsComponent,
    UpdateProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

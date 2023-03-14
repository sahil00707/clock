import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GridComponent } from './grid/grid.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GridComponent,
 
   
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

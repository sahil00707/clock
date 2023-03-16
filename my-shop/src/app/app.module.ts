import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase ,} from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
  
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Regi } from '../regi';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'

interface data {
  email: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  login(email: string, pass: string) {
    this.angularfireauth.signInWithEmailAndPassword(email, pass).then(() => {
      alert("hello")
    },
      err => {
        alert("Oops")
      }
    )
  }

  register(email:string,pass:string){
this.angularfireauth.createUserWithEmailAndPassword(email,pass).then(()=>{
  console.log("Ok")
})
  }
  constructor(private http: HttpClient, private router: Router, private angularfireauth: AngularFireAuth) { }
}


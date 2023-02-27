import { Injectable } from '@angular/core';
import { Regi } from '../regi';
import { HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

 
log(){ 
 if( localStorage.getItem('data')){
  return true;
}
else 
return false;
}

  saveData(data:Regi){
this.http.post('http://localhost:3000/userData',data).subscribe((res)=>{
  localStorage.setItem('data',JSON.stringify( data));

});

//
  }

  searchName(query:string){
   
return this.http.get(`http://localhost:3000/userData?q=${query}`);
  }

  constructor(private http:HttpClient,private router:Router) { }
}


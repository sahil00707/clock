import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataType, productDataType } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  isAuthorized = new BehaviorSubject<boolean>(false);
  isAdmin =new BehaviorSubject<boolean>(false);
  isAlreadyLoggedIn=new BehaviorSubject<boolean>(true);

  storeData(data: DataType) {
    return this.http.post('http://localhost:3000/userData', data).subscribe();
  }

  getData(data: DataType) {
    this.http.get(`http://localhost:3000/userData?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((res: any) => {
      if (data.email == 'admin@gmail.com' && data.password == 'admin') {
        this.isAdmin.next(true)
      }
      else {
        this.isAdmin.next(false)
      }
      if (res && res.body.length >= 1) {
        this.isAuthorized.next(true);
        this.router.navigate(['/app-home'])
      }
    })
  }

  addProduct(form: productDataType) {
    this.http.post('http://localhost:3000/products', form).subscribe(()=>{
      this.router.navigate(['/app-dashboard'])
    });
  }
  
  fetchProducts(){
  return  this.http.get<productDataType[]>('http://localhost:3000/products')
  }

  fetchProduct(id:string){
    return this.http.get<productDataType>(`http://localhost:3000/products/${id}`)
  }

  deleteProduct(id:number){
return this.http.delete(`http://localhost:3000/products/${id}`)

  }

  updateProduct(data:productDataType,id:string){
return this.http.put(`http://localhost:3000/products/${id}`,data)
  }

  filter(searchInput:string){
return this.http.get<productDataType[]>(`http://localhost:3000/products?q=${searchInput}`);
  }

  constructor(private http: HttpClient, private router: Router) { }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataType } from '../data-type';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUp(formData:DataType){
// console.log(formData);
this.myservice.storeData(formData);
this.myservice.isAuthorized.next(true);
this.router.navigate(['app-home'])

  }
  constructor(private myservice:MyserviceService,private router:Router){

  }
}

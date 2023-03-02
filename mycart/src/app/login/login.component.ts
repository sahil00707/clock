import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login(formData:any){
this.myservice.getData(formData);
  }
  constructor(private myservice:MyserviceService){

  }
}

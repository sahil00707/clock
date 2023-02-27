import { Component } from '@angular/core';
import { Regi } from '../regi';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  register(data:Regi){
this.service.saveData(data);
//this.service.isLoggedIn.next(true)
  }
  constructor(private service:MyserviceService){

  }
}

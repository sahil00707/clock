import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isAdmin=this.myservice.isAdmin.value
  isAlreadyLoggedIn=!this.myservice.isAlreadyLoggedIn.value
  constructor(private myservice:MyserviceService){

  }

}

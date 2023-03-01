import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  constructor(private serv: MyserviceService) {

  }
}

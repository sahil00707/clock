import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  list:any;
  search(i: string) {
  this.serv.searchName(i).subscribe((res)=>{
    this.list=res;
  })
  }
  constructor(private serv: MyserviceService) {

  }
}

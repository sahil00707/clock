import { Component, ElementRef, ViewChild ,OnInit,AfterContentInit} from '@angular/core';
import { Regi } from '../regi';
import { MyserviceService } from '../services/myservice.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 


  constructor(private service:MyserviceService,private router:Router){

  }
  ngOnInit(){
    this.service.register("sahil2@gmail.com","12345678");
  }
  login(){
    this.service.login("sahil1@gmail.com","12345678")
  }
 
}

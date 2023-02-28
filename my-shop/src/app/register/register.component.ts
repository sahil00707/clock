import { Component, ElementRef, ViewChild ,OnInit,AfterContentInit} from '@angular/core';
import { Regi } from '../regi';
import { MyserviceService } from '../services/myservice.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('hello')hello: any;
  @ViewChild(ChildComponent)p: any;

  


  constructor(private service:MyserviceService,private router:Router){

  }
  ngOnInit(){
  }
  ngAfterViewInit(){
   this.hello.nativeElement.style.color="red";
   console.log(this.p);
   

 }
}

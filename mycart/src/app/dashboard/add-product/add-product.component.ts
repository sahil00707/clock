import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productDataType } from 'src/app/data-type';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProduct(form:productDataType){
    this.myservice.addProduct(form)
      }
      constructor(private myservice:MyserviceService,private router:Router){
    
      }
}

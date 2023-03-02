import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productDataType } from 'src/app/data-type';
import { MyserviceService } from 'src/app/services/myservice.service';
import { AllProductsComponent } from '../all-products/all-products.component';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productInfo: any;
  productId: string = '';

  updateProduct(form: productDataType) {
    this.myservice.updateProduct(form, this.productId).subscribe((res)=>{
this.router.navigate(['/app-dashboard'])
    })
  }
  constructor(private routeInfo: ActivatedRoute, private myservice: MyserviceService,private router:Router) {

  }
  ngOnInit() {
    this.productId = this.routeInfo.snapshot.paramMap.get('id') || '';
    this.myservice.fetchProduct(this.productId).subscribe((res) => {
      this.productInfo = res
      console.log(res.name);

    })


  }

}

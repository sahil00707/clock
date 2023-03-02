import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productDataType } from 'src/app/data-type';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productInfo: any;
  productId: string = '';

  updateProduct(form: productDataType) {

this.myservice.updateProduct(form,this.productId)
  }
  constructor(private routeInfo: ActivatedRoute, private myservice: MyserviceService) {

  }
  ngOnInit() {
    this.productId = this.routeInfo.snapshot.paramMap.get('id') || '';
    this.myservice.fetchProduct(this.productId).subscribe((res) => {
      this.productInfo = res
      console.log(res.name);

    })


  }

}

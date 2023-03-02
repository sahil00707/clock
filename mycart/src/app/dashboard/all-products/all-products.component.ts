import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productDataType } from 'src/app/data-type';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  productList: undefined | productDataType[];

  addProduct(form: productDataType) {
    this.myservice.addProduct(form)
  }

  updateProduct(id: number) {
    this.router.navigate(['update-product'])
    this.fetchProducts()
  }

  deleteProduct(id: number) {
    this.myservice.deleteProduct(id).subscribe((res) => {
      this.fetchProducts();
    })
  }

  filter(searchInput: string) {
    this.myservice.filter(searchInput).subscribe((res) => {
      this.productList = res;


    })
  }
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.myservice.fetchProducts().subscribe((res) => {
      if (res) {
        this.productList = res
      }
    })
  }
}

import { ProductsApiService } from 'src/app/controllers/products-api.service';
import { Products } from './../../../modules/products';
import { Component } from '@angular/core';
import { Carts } from 'src/app/modules/carts';
import { CartApiService } from 'src/app/controllers/cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products  !: any;
  cart = new Carts()
  constructor(private api: ProductsApiService , private apicart : CartApiService){
    this.api.get().subscribe((data : any)=>{
      this.products = data;
      this.addToCart(Products);
    })

  }
  addToCart(cart:any){
    this.api.post(this.cart).subscribe((data:any)=>{
      console.log(data);
    })
  }
}


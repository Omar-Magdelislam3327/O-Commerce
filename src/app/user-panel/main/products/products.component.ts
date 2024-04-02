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
  cart = new Carts();
  constructor(private api: ProductsApiService , private apicart : CartApiService){
    this.api.get().subscribe((data : any)=>{
      this.products = data;
    })
  }
  ngOnInit(){
    this.addToCart(this.cart.id)
  }
  addToCart(id:any){
    this.apicart.getById(id).subscribe((data : any)=>{
      this.apicart.post(this.cart).subscribe((data:any)=>{
        this.cart = data;
      })
    })
    this.apicart.post(this.products[id-1]).subscribe((data:any)=>{
      this.cart = data;
    })
  }
}


import { Component } from '@angular/core';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { Carts } from 'src/app/modules/carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart !:any;
  constructor(private api : CartApiService) {
    this.getCart();
  }
  getCart(){
    this.api.get().subscribe((data:any)=>{
      this.cart = data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe((data:any)=>{
      this.getCart();
    })
  }
}

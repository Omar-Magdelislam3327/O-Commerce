import { Component } from '@angular/core';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Carts } from 'src/app/modules/carts';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent {
  sales!: any;
  cart = new Carts()
  constructor(private salesApi : SalesApiService , private apicart : CartApiService ){
    this.salesApi.get().subscribe((data : any)=>{
      this.sales = data;
    })
  }
  ngOnInit(){
    this.addToCart(this.cart.id)
  }
  addToCart(id:any){
    this.apicart.getById(id).subscribe((data : any)=>{
      this.apicart.post(this.cart).subscribe((data:any)=>{
      })
    })
    this.apicart.post(this.sales[id-1]).subscribe((data:any)=>{
      this.cart = data;
    })
  }
}

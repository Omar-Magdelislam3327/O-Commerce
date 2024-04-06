import { CartApiService } from 'src/app/controllers/cart-api.service';
import { Carts } from 'src/app/modules/carts';
import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart !:any;
  id!:any;
  total !: any;
  cartes = new Carts();
  carte !:any
  constructor(private api : CartApiService , private router : Router) {
    this.getCart();
  }
  ngOnInit(){
    this.getTotal()
  }
  getTotal(){
    this.total = 0;
    for(let x in this.cart)
      this.total += this.cart[x].price * this.cart[x].quantity;
      console.log("TOTAL IS " + this.total);
      console.log("CART IS ",this.cart);
  }
  getCart(){
    this.getTotal();
    this.api.get().subscribe((data:any)=>{
      this.cart = data;
    })
  }
  remove(id:any){
    this.api.delete(id).subscribe((data:any)=>{
      this.getCart();
    })
  }
  update(){
    console.log("UPDATING");
    this.api.put(this.id,this.cart).subscribe(()=>{
      location.reload();
    })
  }
}


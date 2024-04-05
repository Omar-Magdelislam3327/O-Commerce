import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Carts } from 'src/app/modules/carts';
import { Sales } from 'src/app/modules/sales';

@Component({
  selector: 'app-discounts-details',
  templateUrl: './discounts-details.component.html',
  styleUrls: ['./discounts-details.component.css']
})
export class DiscountsDetailsComponent {
  id !: any;
  sale = new Sales();
  sales !:any;
  cart = new Carts();
  ngOnInit(){
    let btns = document.querySelectorAll(`.btnsize`);
    function removeActiveClass(btns:any) {
      btns.forEach((btn : any) => btn.classList.remove('active'));
    }
    const sizeButtons = document.querySelectorAll('.size-button');
    sizeButtons.forEach(sizeButton => {
      sizeButton.addEventListener('click', () => {
          removeActiveClass(sizeButtons);
          sizeButton.classList.add('active');
      });
    });
    this.addToCart(this.cart.id , this.cart.quantity);
  }
  constructor(private api : SalesApiService , private ActivatedRoute : ActivatedRoute , private apicart : CartApiService){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.sale = data;
    })
    this.apicart.getById(this.id).subscribe((data:any)=>{
      this.cart=data;
    })
  }
  addToCart(id:any , quantity : number){
    this.api.getById(id).subscribe((data:any)=>{
      data.quantity = quantity;
      this.api.put(id , data).subscribe((data:any)=>{
        this.apicart.post(data).subscribe((data:any)=>{
          this.cart=data;
        })
      })
    })
  }
}

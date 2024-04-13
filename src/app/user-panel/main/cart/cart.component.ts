import { CartApiService } from 'src/app/controllers/cart-api.service';
import { Carts } from 'src/app/modules/carts';
import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart !:any;
  id!:any;
  allPrice!: any;
  minValue: number = 1;
  maxValue: number = 20;
  constructor(private api : CartApiService , private router : Router) {
    this.getCart();
  }
  ngOnInit(){
    AOS.init()
    window.addEventListener('load' , AOS.refresh)
  }
  getCart(){
    this.api.get().subscribe((data:any)=>{
      this.cart = data;
      this.allPrice = 0;
      for(let i = 0 ; i < this.cart.length ; i++){
      const numPrice = (this.cart[i].price * this.cart[i].quantity);
      this.allPrice  = numPrice + this.allPrice;
      }
    })
  }
  copounTotal(){
    if(this.cart.coupon === "omar3327"){
      this.allPrice = this.allPrice - 500;
    }
  }
  remove(id:any){
    this.api.delete(id).subscribe((data:any)=>{
      this.getCart();
    })
  }
  update(id:any , quantity:number){
    this.api.getById(id).subscribe((data:any)=>{
      data.quantity = quantity
      this.api.put(id , data).subscribe((data:any)=>{
      })
    })
  }
  private modalService = inject(NgbModal);
	closeResult = '';
	openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' , size: 'lg' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}


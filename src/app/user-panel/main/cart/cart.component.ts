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


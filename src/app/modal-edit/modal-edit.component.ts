import { Component, inject, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carts } from '../modules/carts';
import { ActivatedRoute } from '@angular/router';
import { CartApiService } from '../controllers/cart-api.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent {
  cart = new Carts();
  carte !:any
  id !:any;
  constructor(private activatedRoute : ActivatedRoute , private api : CartApiService){
    this.id =  this.activatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.cart= data
    });
  }
  update(){
    this.api.put(this.id,this.cart).subscribe(()=>{
      location.reload();
    })
  }

  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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

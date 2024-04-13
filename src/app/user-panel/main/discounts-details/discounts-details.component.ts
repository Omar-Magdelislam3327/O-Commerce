import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Carts } from 'src/app/modules/carts';
import { Sales } from 'src/app/modules/sales';
import { MessageService } from 'primeng/api';
import * as AOS from 'aos';

@Component({
  selector: 'app-discounts-details',
  templateUrl: './discounts-details.component.html',
  styleUrls: ['./discounts-details.component.css'],
  providers: [MessageService]
})
export class DiscountsDetailsComponent {
  [x: string]: any;
  id !: any;
  sale = new Sales();
  sales !: any;
  cart = new Carts();
  ngOnInit() {
    AOS.init()
    window.addEventListener('load' , AOS.refresh)
    const mainImage: HTMLImageElement | null = document.getElementById("mainImage") as HTMLImageElement;
    const smallImages: HTMLCollectionOf<HTMLImageElement> = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>;
    if (mainImage) {
      smallImages[0].onclick = () => {
        mainImage.src = smallImages[0].src;
      }

      smallImages[1].onclick = () => {
        mainImage.src = smallImages[1].src;
      }

      smallImages[2].onclick = () => {
        mainImage.src = smallImages[2].src;
      }

      smallImages[3].onclick = () => {
        mainImage.src = smallImages[3].src;
      }

      smallImages[4].onclick = () => {
        mainImage.src = smallImages[4].src;
      }
    }

    function removeActiveClass(buttons: NodeListOf<Element>) {
      buttons.forEach((button: Element) => button.classList.remove('active'));
      console.log(buttons);
    }
    const sizeButtons: NodeListOf<Element> = document.querySelectorAll('.size-button');
    sizeButtons.forEach((sizeButton: Element) => {
      sizeButton.addEventListener('click', () => {
        removeActiveClass(sizeButtons);
        sizeButton.classList.add('active');
      });
    });

    this.addToCart(this.cart.id, this.cart.quantity);
  }
  constructor(private api: SalesApiService, private ActivatedRoute: ActivatedRoute, private apicart: CartApiService, private messageService: MessageService, private apisale: SalesApiService) {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data: any) => {
      this.sale = data;
    })
    this.apicart.getById(this.id).subscribe((data: any) => {
      this.cart = data;
    })
  }
  addToCart(id: any, quantity: number) {
    this.api.getById(id).subscribe((data: any) => {
      data.quantity = quantity;
      this.api.put(id, data).subscribe((data: any) => {
        this.apicart.post(data).subscribe((data: any) => {
          this.cart = data;
        })
      })
    })
    this.messageService.add({ severity: 'success', summary: 'Done', detail: 'Successfully Added' });
  }
  selectedColor: string = '';
  selectColor(event: MouseEvent, color: string) {
    document.querySelectorAll('.color').forEach(colorElement => {
      colorElement.classList.remove('selected');
    });
    (event.target as HTMLElement).classList.add('selected');
    this.selectedColor = color;
  }

}

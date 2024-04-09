import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Carts } from 'src/app/modules/carts';
import { Sales } from 'src/app/modules/sales';
import { MessageService } from 'primeng/api';
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
    // let btn = document.getElementsByClassName( "addcart" )
    //     btn = addEventListener( 'click', function(){
    //         for(let i = 0; i < 50 ; i++){
    //             let spark = document.createElement("i");
    //             spark.classList.add("spark");
    //             const randomX = (Math.random() - 0.5) * window.innerWidth;
    //             const randomY = (Math.random() - 0.5) * window.innerHeight;
    //             spark.style.setProperty("--x" , randomX + "px");
    //             spark.style.setProperty("--y" , randomY + "px");
    //             const randomSize = Math.random() * 8 + 2;
    //             spark.style.width = randomSize + 'px'
    //             spark.style.height = randomSize + 'px'
    //             document.body.appendChild(spark);
    //             setTimeout(() => {
    //                 spark.remove();
    //             }, 2000)
    //         }
    //     })
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
    let btns = document.querySelectorAll(`.btnsize`);
    function removeActiveClass(btns: any) {
      btns.forEach((btn: any) => btn.classList.remove('active'));
    }
    const sizeButtons = document.querySelectorAll('.size-button');
    sizeButtons.forEach(sizeButton => {
      sizeButton.addEventListener('click', () => {
        removeActiveClass(sizeButtons);
        sizeButton.classList.add('active');
      });
    });
    this.addToCart(this.cart.id, this.cart.quantity);
  }
  constructor(private api: SalesApiService, private ActivatedRoute: ActivatedRoute, private apicart: CartApiService, private messageService: MessageService) {
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

}

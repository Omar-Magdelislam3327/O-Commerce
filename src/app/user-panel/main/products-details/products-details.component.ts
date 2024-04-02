import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/controllers/products-api.service';
import { Products } from 'src/app/modules/products';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  product = new Products();
  id !: any;
  ngOnInit() {
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
    }
  constructor(private api : ProductsApiService , private ActivatedRoute : ActivatedRoute , private router : Router){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.product = data
    })
  }
}

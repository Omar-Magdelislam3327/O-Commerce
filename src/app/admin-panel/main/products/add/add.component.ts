import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/controllers/products-api.service';
import { Products } from 'src/app/modules/products';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  product = new Products();
  constructor(public api : ProductsApiService){}
  submit(){
    this.api.post(this.product).subscribe((data:any)=>{
      location.reload();
    });
  }
}


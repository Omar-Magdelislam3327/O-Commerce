import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/controllers/products-api.service';
import { SalesApiService } from 'src/app/controllers/sales-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  sales !:any;
  sale: any;
  products !:any;
  product : any;
  constructor(public api : ProductsApiService , public apis : SalesApiService){
    this.api.get().subscribe((data:any)=>{
      this.sales = data;
    });
    this.api.get().subscribe((res:any)=>{
      this.products = res;
    })
  }
}

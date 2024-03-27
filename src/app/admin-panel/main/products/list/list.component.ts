import { Products } from './../../../../modules/products';
import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/controllers/products-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  Products!:any[];
  constructor(private api : ProductsApiService){
    this.getAllProducts();
  }
  getAllProducts(){
    this.api.get().subscribe((data : any)=>{
      this.Products = data;
    });
  }
  remove(id :any){
    this.api.delete(id).subscribe(()=>{
    this.getAllProducts();
  })
  }
}

import { Products } from './../../../../modules/products';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/controllers/products-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  Products!:any[];
  constructor(private api : ProductsApiService , private router : Router){
    this.getAllProducts();
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
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

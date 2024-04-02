import { Carts } from 'src/app/modules/carts';
import { Component } from '@angular/core';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {
  Carts !:any[];
  constructor(private api : CartApiService , private router : Router ){
    this.getCarts()
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound");
    }
  }
  ngOnInit(){
    // function done(){
    //     const stat = document.getElementById("statues");
    //     stat.innerHTML = "Shipped";
    //   }
  }
  getCarts(){
    this.api.get().subscribe((data:any)=>{
      this.Carts = data;
    })
  }
}


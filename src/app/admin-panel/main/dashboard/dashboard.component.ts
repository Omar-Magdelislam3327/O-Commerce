import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Carts !:any[];
  constructor(private api : AdminApiService , private router : Router , private apicart : CartApiService) {
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
    this.getCarts()
  }
  getCarts(){
    this.apicart.get().subscribe((data:any)=>{
      this.Carts = data;
    })
  }

}

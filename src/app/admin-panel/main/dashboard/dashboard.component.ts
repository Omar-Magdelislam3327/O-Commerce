import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import Chart from 'chart.js/auto';
import { MessageService } from 'primeng/api';
import { FeedbackApiService } from 'src/app/controllers/feedback-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Carts: any[] = [];
  message!:any[];
  constructor(private api : AdminApiService , private router : Router , private apicart : CartApiService , public apimessage : FeedbackApiService) {
    this.getAllMessages();
    this.getCarts();
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
  }
  getCarts() {
    this.apicart.get().subscribe((data: any) => {
      this.Carts = data;
      // Set initial status to "Pending" if not already set
      this.Carts.forEach(cart => {
        if (!cart.status) {
          cart.status = 'Pending';
        }
      });
    });
  }

  changeStatus(cart: any, newStatus: string) {
    cart.status = newStatus;
    // You might want to update the status in your backend here as well
  }
  getAllMessages(){
    this.apimessage.get().subscribe((data : any)=>{
      this.message = data;
    });
  }
}

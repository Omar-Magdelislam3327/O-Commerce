import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/controllers/cart-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  Carts: any[] = [];

  constructor(private api: CartApiService, private router: Router) {
    let loggedIn = JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if (!loggedIn) {
      this.router.navigateByUrl("/notFound");
    }
  }

  ngOnInit() {
    this.getCarts();
  }

  getCarts() {
    this.api.get().subscribe((data: any) => {
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
}

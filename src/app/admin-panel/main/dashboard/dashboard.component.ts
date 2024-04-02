import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private api : AdminApiService , private router : Router) {
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { Admins } from 'src/app/modules/admin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin = new Admins();
  constructor(private router : Router , private api : AdminApiService){
    this.api.get().subscribe((data:any)=>{
      this.admin = data;
    })
  }

  logOut(){
    localStorage.setItem( "LoggedIn" , 'false');
    this.router.navigateByUrl( "/admin/login");
  }
}

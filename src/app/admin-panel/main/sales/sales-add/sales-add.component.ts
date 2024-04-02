import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from 'src/app/modules/sales';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent {
  sales = new Sales();
  constructor(public api : SalesApiService , private router : Router){
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
  }
  submit(){
    this.api.post(this.sales).subscribe((data:any)=>{
    location.reload();
  })
  }
}

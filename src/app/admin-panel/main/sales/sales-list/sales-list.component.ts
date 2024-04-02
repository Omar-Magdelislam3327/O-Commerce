import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from './../../../../modules/sales';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent {
  Sales !:any;
  constructor(private api : SalesApiService , private router : Router){
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
    this.api.get().subscribe((data : any)=>{
      this.Sales = data;
      console.log("Data",this.Sales);
    })
  }
  remove(id :any){
    this.api.delete(id).subscribe(()=>{
  })
}
}

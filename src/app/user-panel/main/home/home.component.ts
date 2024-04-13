import { Component } from '@angular/core';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from 'src/app/modules/sales';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sales !:any;
  constructor( public apis : SalesApiService){
    this.apis.get().subscribe((data:any)=>{
      this.sales = data;
    });
  }
  ngOnInit(){
    AOS.init()
    window.addEventListener('load' , AOS.refresh)
  }
}

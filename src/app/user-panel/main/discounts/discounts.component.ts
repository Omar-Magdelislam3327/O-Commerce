import { Component } from '@angular/core';
import { SalesApiService } from 'src/app/controllers/sales-api.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent {
  sales!: any;
  constructor(private salesApi : SalesApiService){
    this.salesApi.get().subscribe((data : any)=>{
      this.sales = data;
    })
  }
}

import { Component } from '@angular/core';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from 'src/app/modules/sales';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sales !:any;
  displayedProducts!: Sales[];
  constructor( public apis : SalesApiService){
    this.apis.get().subscribe((data:any)=>{
      this.sales = data;
      this.displayedProducts = data.slice(0, 4);
    });
  }
}

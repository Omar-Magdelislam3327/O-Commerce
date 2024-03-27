import { Component } from '@angular/core';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from 'src/app/modules/sales';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent {
  sales = new Sales();
  constructor(public api : SalesApiService){}
  submit(){
    this.api.post(this.sales).subscribe((data:any)=>{
    location.reload();
  })
  }
}

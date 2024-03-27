import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from './../../../../modules/sales';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent {
  Sales !:any;
  constructor(private api : SalesApiService){
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

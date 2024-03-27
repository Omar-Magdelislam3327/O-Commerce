import { ActivatedRoute } from '@angular/router';
import { Sales } from 'src/app/modules/sales';
import { Component } from '@angular/core';
import { SalesApiService } from 'src/app/controllers/sales-api.service';

@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.css']
})
export class SalesEditComponent {
  sales = new Sales();
  id !:any;
  constructor(private ActivatedRoute : ActivatedRoute , private api : SalesApiService){
    this.id =  ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.sales= data
    });
  }
  update(){
    this.api.put(this.id , this.sales).subscribe((data:any)=>{
      location.reload();
    })
  }
}

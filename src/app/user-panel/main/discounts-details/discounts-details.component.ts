import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesApiService } from 'src/app/controllers/sales-api.service';
import { Sales } from 'src/app/modules/sales';

@Component({
  selector: 'app-discounts-details',
  templateUrl: './discounts-details.component.html',
  styleUrls: ['./discounts-details.component.css']
})
export class DiscountsDetailsComponent {
  sale = new Sales();
  id !: any;
  constructor(private api : SalesApiService , private ActivatedRoute : ActivatedRoute , private router : Router){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.sale = data
    })
  }
}

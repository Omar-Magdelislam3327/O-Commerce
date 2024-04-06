import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/controllers/products-api.service';
import { Products } from 'src/app/modules/products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product = new Products();
  id !:any;
  constructor(private activatedRoute : ActivatedRoute , private api : ProductsApiService){
    this.id =  this.activatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any) =>{
      this.product= data
    });
  }
  update(){
    this.api.put(this.id,this.product).subscribe(()=>{
      location.reload();
    })
  }
}

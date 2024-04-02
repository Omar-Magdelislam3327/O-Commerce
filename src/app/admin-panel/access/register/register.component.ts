import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { Admins } from 'src/app/modules/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  admin = new Admins();
  constructor(private api : AdminApiService , private router : Router){

  }
  submit(){
    this.api.post(this.admin).subscribe((data:any)=>{
      this.router.navigateByUrl("/admin/login")
    })
  }
}

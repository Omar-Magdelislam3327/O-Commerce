import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { Admins } from 'src/app/modules/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin = new Admins();
  message = "";
  constructor(private api : AdminApiService , private router : Router) {}
  submit(){
    this.api.get().subscribe((data:any)=>{
      let user = data.find((user:any)=>{
        return user.email === this.admin.email &&  user.password === this.admin.password;
      })
      if (user){
        localStorage.setItem("LoggedIn" , "true");
        this.router.navigateByUrl("/admin/dashboard")
      }else{
        this.message = "Invalid  Email or Password";
        setTimeout(()=>{
          this.message = ""
        }, 3000)
      }
    })

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackApiService } from 'src/app/controllers/feedback-api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  message!:any[];
  constructor(private api : FeedbackApiService , private router : Router){
    this.getAllMessages()
    let loggedIn =  JSON.parse(localStorage.getItem("LoggedIn") || "false");
    if(!loggedIn){
      this.router.navigateByUrl("/notFound")
    }
  }
  getAllMessages(){
    this.api.get().subscribe((data : any)=>{
      this.message = data;
    });
  }
  remove(id : any) {
    this.api.delete(id).subscribe((data:any)=>{
      this.getAllMessages();
    })
  }
}

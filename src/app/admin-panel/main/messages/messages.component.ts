import { Component } from '@angular/core';
import { FeedbackApiService } from 'src/app/controllers/feedback-api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  message!:any[];
  constructor(private api : FeedbackApiService){
    this.getAllMessages()
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

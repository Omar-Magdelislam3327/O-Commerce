import { Component } from '@angular/core';
import { FeedbackApiService } from 'src/app/controllers/feedback-api.service';
import { Feedback } from 'src/app/modules/Feedback';
import { Sales } from 'src/app/modules/sales';
import * as AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message = new Feedback();
  constructor(public api : FeedbackApiService){}
  sendMessage(){
    this.api.post(this.message).subscribe((data:any)=>{
      location.reload();
    })
  }
  ngOnInit(){
    AOS.init()
    window.addEventListener('load' , AOS.refresh)
  }
}

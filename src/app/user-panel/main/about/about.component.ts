import { Component } from '@angular/core';
import { Sales } from 'src/app/modules/sales';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnInit(){
    AOS.init()
    window.addEventListener('load' , AOS.refresh)
  }
}

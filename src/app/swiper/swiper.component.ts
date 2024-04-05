import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 2000, // autoplay delay in milliseconds
        disableOnInteraction: false, // allows autoplay to continue after user interaction
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items = [
    { label: 'All Movies', routerLink: '/home' },
    { label: 'For Kids', routerLink: '/forKids' },
    { label: 'Select Branch', routerLink: '/movie/branches' },

  ]
  config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 10,
    navigation: true,
    // pagination: { clickable: true },
    scrollbar: { draggable: true },
    setWrapperSize: true,
    roundLengths: true,
    controller: {
      inverse: true,
    },

    effect: 'cube',
    initialSlide: 1,
    loop:true,
    slideToClickedSlide:true,
    centeredSlides:true,
    
    // cubeEffect: {
    //   slideShadows: true,
    // },
    breakpoints: {
     
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
     
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      820: {
        slidesPerView: 6,
      }
    },

    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    allowTouchMove: true,
    autoHeight: true,

  };
  constructor() { }

  ngOnInit(): void {
  }


  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}

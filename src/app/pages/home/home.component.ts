import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { shareReplay, tap } from 'rxjs';
import { FilmI, MovieI } from 'src/app/core/interfaces/movie.interface';
import { ConfigService } from 'src/app/services/config.service';
import { MovieService } from 'src/app/services/movie.service';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items: MenuItem[] = [
    { label: 'All Movies', routerLink: '/home' },
    { label: 'For Kids', routerLink: '/forKids' },
    { label: 'Select Branch', routerLink: '/movie/branches' },

  ]
  moviesData!: MovieI;
  categoriesLabels!: MenuItem[];
  currentCategoryFilms!: FilmI[];
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
    cubeEffect: {
      slideShadows: true,
    },
    initialSlide: 1,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,

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
  constructor(
    private _movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private _configService: ConfigService
  ) { }

  ngOnInit(): void {

    this.getAllMovies();
  }

  getAllMovies() {

    this._configService.setLoading(true);
    this._movieService.moviesData$.subscribe({
      next: (data) => {
        this.moviesData = data;
        console.log(data);
        this.getMovieCategories();
        this._configService.setLoading(false);
      }
    })

  }

  getMovieCategories() {

    this.categoriesLabels = this.moviesData.Categories.map(x => {
      let item = {
        label: x.CategoryName,
        id: x.CategoryID.toString(),
      }
      return item;
    });


    this.getCurrentCategoryFilms();

  }


  getCurrentCategoryFilms() {

    this._configService.setLoading(true);

    this.route.queryParams.subscribe({
      next: (params) => {
        console.log(params);

        this._configService.setLoading(false);

        if (!this.moviesData) return
        if (params['category']) {

          this.currentCategoryFilms = this.moviesData?.Categories.find(x => x.CategoryID == params['category'])?.Films as FilmI[];
        } else {
          this.router.navigate([], { queryParams: { category: this.categoriesLabels[0].id } });
        }

      }
    })
  }
}

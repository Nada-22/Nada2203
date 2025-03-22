import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmI, MovieI } from 'src/app/core/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  moviesData!: MovieI;
  currentFilm!: FilmI;
  constructor(
    private _movieService: MovieService,
    private route: ActivatedRoute,
    public location: Location,
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
        this.getCurrentCategoryFilm();
        this._configService.setLoading(false);

      }
    })
  }

  getCurrentCategoryFilm() {
    this.route.queryParams.subscribe({
      next: (params) => {
        console.log(params);
        let category = this.moviesData?.Categories.find(x => x.CategoryID == params['category']);
        this.currentFilm = category?.Films.find(x => x.FilmID == params['film']) as FilmI;

        // this.currentFilm = this.moviesData?.Categories.find(x => x.CategoryID == categoryId)?.Films as FilmI[];

      }
    })
  }
}

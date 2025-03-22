import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaI } from 'src/app/core/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {


  cinemas: CinemaI[] = [];
  uiCinemas: CinemaI[] = [];
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
       
        this.uiCinemas = this.cinemas = data.Cinemas;
        this._configService.setLoading(false);
      }
    })
  }

  filterBranches(filterKey: string) {
    this.uiCinemas = this.cinemas.filter(cinema => cinema.CinemaName.toLowerCase().includes(filterKey.toLowerCase()))
  }

  goBack() {
    this.location.back()
  }
}

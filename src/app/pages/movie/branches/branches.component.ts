import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaI } from 'src/app/core/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {


  cinemas: CinemaI[] = [];
  uiCinemas: CinemaI[] = [];
  constructor(private _movieService: MovieService , private route:ActivatedRoute ,public location: Location) { }

  ngOnInit(): void {

    this.getAllMovies();

    console.log(this.route.pathFromRoot);
    
  }

  getAllMovies() {

    this._movieService.moviesData$.subscribe({
      next: (data) => {
        console.log(data);
        this.uiCinemas = this.cinemas = data.Cinemas;

      }
    })
  }

  filterBranches(filterKey: string) {
    this.uiCinemas = this.cinemas.filter(cinema => cinema.CinemaName.toLowerCase().includes(filterKey.toLowerCase()))
  }

  goBack(){
    this.location.back()
  }
}

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {



  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {

    this.getAllMovies()
  }

  getAllMovies(){

    this._movieService.moviesData$.subscribe({
      next: (data) => {
        console.log(data);
        
      }
    })
  }

}

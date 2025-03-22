import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieI } from '../core/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = environment.base_Url + '/72e5ee70-4b07-4939-aa4b-3f5573e80f81';
  private data$!: Observable<any>;
  constructor(private http: HttpClient) {

    
  }



  // getMoviesData(): Observable<any> {
  //   if (!this.data$) {
  //     this.data$ = this.http.get(this.apiUrl).pipe(
  //       shareReplay({ bufferSize: 1, refCount: false })
  //     );
  //   }
  //   return this.data$;
  // }

    // create shared observable directly
    public moviesData$: Observable<MovieI> = this.http.get<MovieI>(this.apiUrl).pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    );

    
  // Optional: Clear the cached data if you need to force refresh
  clearCache() {
    this.data$ = undefined!;
  }
}

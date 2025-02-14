import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [

  ];

  getMovies() {
    return this.movieList;
  }
}

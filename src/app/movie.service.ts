import { Injectable } from '@angular/core';

import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  // moviesList is now using instances of the Movie class 
  moviesList = [
    new Movie("Back to the future", '1984', 'Robert Zemeckis'),
    new Movie("Requiem for a Dream",'2000','Darren Aronofsky'),
    new Movie("The Social Network",'2010', 'Darren Aronofsky'),
    new Movie("Fight Club", '1999', 'David Findher')
  
  ]

  // methods 
  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, moveiyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:moveiyear})
  }
}

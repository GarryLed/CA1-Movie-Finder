import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    {title: "Back to the future", year: '1984', director: 'Robert Zemeckis' },
    {title: "Requiem for a Dream", year: '2000', director: 'Darren Aronofsky'},
    {title: "The Social Network", year: '2010', director: 'Darren Aronofsky'},
    {title: "Fight Club", year: '1999', director: 'David Findher'}
  
  ]

  // methods 
  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, moveiyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:moveiyear})
  }
}

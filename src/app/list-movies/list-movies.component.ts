import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model'; // imort Movie class from the movie.model 

@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movies:any[]=[];

  constructor(private movieService:MovieService) {} // decleare movie service in the constructor 

  // displays the list of movies already populated 
  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }

  // placeholder methods:
  // sets the selected movie 
  selectMovie(myMovie:Movie):void {
    console.log(myMovie);
  }

  // set a selected colour on a movie the user choses 
  isSelected(movie:Movie):boolean {
    return false; 
  }
}

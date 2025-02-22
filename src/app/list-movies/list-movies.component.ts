import { Component, EventEmitter, Output} from '@angular/core';
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

  private currentMovie!:Movie; // declare currentmovie 

  @Output() onSelectedMovie:EventEmitter<Movie>;


  constructor(private movieService:MovieService) {
    this.onSelectedMovie=new EventEmitter();

  } 

  // displays the list of movies already populated 
  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }

  // placeholder methods:
  // sets the selected movie 
  selectMovie(myMovie:Movie):void {
    console.log(myMovie);
    this.currentMovie=myMovie; // assign current movie to myMovie parameter 
    this.onSelectedMovie.emit(myMovie); // when movies is selected Emit the movie that was clicked to output 
  }

  // set a selected colour on a movie the user choses 
  isSelected(movie:Movie):boolean {
    if (!movie || !this.currentMovie) {
      return false;
    }
    return movie.title==this.currentMovie.title; // returns true if movie title matches the current movie title 
  }
}

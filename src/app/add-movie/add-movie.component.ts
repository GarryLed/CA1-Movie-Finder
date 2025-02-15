import { Component } from '@angular/core';

// import service 
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-add-movie',
  imports: [],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  // inject service 
  constructor(private movieService:MovieService) {}

  // method to create service
  addNewMovie(movietitle:HTMLInputElement, moviedirector:HTMLInputElement, moveiyear: HTMLInputElement) : boolean {
    this.movieService.addMovie(movietitle.value, moviedirector.value, moveiyear.value);
    return false;
  } 
}

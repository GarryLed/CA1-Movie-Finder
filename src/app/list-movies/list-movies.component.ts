import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movies:any[]=[];

  constructor(private movieService:MovieService) {} // decleare movie service in the constructor 

  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }
}

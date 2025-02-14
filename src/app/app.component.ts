import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4-movie-list';

  movies:any[]=[];

  constructor(private movieService:MovieService) {} // decleare movie service in the constructor 

  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }
}

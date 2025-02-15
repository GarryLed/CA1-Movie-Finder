import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CommonModule } from '@angular/common';


import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddMovieComponent, ListMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4-movie-list';

 
}

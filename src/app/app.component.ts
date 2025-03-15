import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports for routing
import { RouterModule } from '@angular/router'; 
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

// imports the movie data interface and the service
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

// component decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Movie finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any; 

  // constructor to inject the api service
  constructor(private _omdbApiService:OmdbApiService) { }

  // function to get the movie details
  getMovieDetails(movieName:string): boolean {
    this._omdbApiService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  
}

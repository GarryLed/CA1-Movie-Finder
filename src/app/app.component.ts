import { Component } from '@angular/core';

import { RouterModule } from '@angular/router'; // import RouterModule

import { CommonModule } from '@angular/common';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule], // add RouterModule to the imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Movie finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any; 

  constructor(private _omdbApiService:OmdbApiService) { }

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

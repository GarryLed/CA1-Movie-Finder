import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';



@Component({
  selector: 'app-searchtitle',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  movieData:IOMDBResponse | undefined;
  errorMessage: any;

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

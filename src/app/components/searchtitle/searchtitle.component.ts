import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';


@Component({
  selector: 'app-searchtitle',
  standalone: true,
  imports: [CommonModule],
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

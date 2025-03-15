import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Observable } from 'rxjs';

import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

//import { SearchtitleComponent } from '../searchtitle/searchtitle.component';
import { IOMDBResponse2 } from '../../omdbresponse2';
import { OmdbApiService } from '../../services/omdb-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  movieData:IOMDBResponse2 | undefined;
  currentPage = 1;
  maxPages = 0;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }}
 
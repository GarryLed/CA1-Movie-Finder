// api service for omdb

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs'; 
import { IOMDBResponse } from '../omdbresponse';
import { IOMDBResponse2 } from '../omdbresponse2';

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {

  // varibles for the omdb api and private key 
  private _siteURL = "https://www.omdbapi.com/"
  private _key = "bbe9df5e" // getting the data
  private _key2 = "?apikey=bbe9df5e&s="

  constructor(private _http:HttpClient) { }

  // get movie data function for dsiplaying one movie data 
  getMovieData(movieTitle:string): Observable<IOMDBResponse> {

    return this._http.get<IOMDBResponse>(`${this._siteURL}?t=${movieTitle}&apikey=${this._key}`)
      .pipe(
        tap(data => console.log('Moviedata/error ' + JSON.stringify(data))
      ),
        catchError(this.handleError)
      );
  }

  
// testing api for displaying multiple movies
//  http://www.omdbapi.com/?apikey=bbe9df5e&s=Jaws&page=2 (this api is working)

  getMovies(title: string, page: number): Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(`${this._siteURL}&s=${title}&page=${page}`).pipe( 
      catchError((error) => throwError(() => new Error(error)))
    );
  }

  // making the api call 
  getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page) 
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  // handle error
  private handleError(err: HttpErrorResponse) {
    console.log('OmdbApiService: ' + err.message);
    return throwError(() => new Error("OmdbApiService: " + err.message));
  }
}

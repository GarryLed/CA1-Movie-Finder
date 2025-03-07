import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // what is this?
import { catchError, tap } from 'rxjs'; // what is tap? 
import { IOMDBResponse } from '../omdbresponse'; // what is this?

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {

  // deplaying firebase 
  private _siteURL = "https://www.omdbapi.com/"
  private _key = "bbe9df5e"

  constructor(private _http:HttpClient) { }


  getMovieData(movieTitle:string): Observable<IOMDBResponse> {

    return this._http.get<IOMDBResponse>(`${this._siteURL}?t=${movieTitle}&apikey=${this._key}`)
      .pipe(
        tap(data => console.log('Moviedata/error ' + JSON.stringify(data))
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

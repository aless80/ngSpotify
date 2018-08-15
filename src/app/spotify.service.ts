import { Injectable } from '@angular/core';
/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
*/
import { map } from 'rxjs/operators';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable, of } from 'rxjs'; //Observable returned with asynch operation
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private searchUrl: string;

  constructor(private _http: Http) {

  }
  
  searchMusic(str: string, type = 'artist') {
    const accessToken = 'ZTNmNjVkODliNjdiNDVlYmEzYWZjYTRkOTc1OTUyNzU6MjAzOGFhNDkyMTNhNGZhMTg2MDY4YWMyMDMxMjk3Zjg=';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  'Bearer ' + accessToken);
    let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    console.log(this.searchUrl)
    return this._http.get(this.searchUrl, options)
      .pipe(
        tap(res => console.log(this)),
      catchError((e) => this.handleError(e)),
      map(res => res.json())
      );
  }
  private handleError2(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return of(error.message || error);
  }
/*

    private heroesUrl = 'api/heroes';  // URL to web api
    getHeroes (): Observable<Hero[]> { //get array of heroes
      return this.http.get<Hero[]>(this.searchUrl) //might have to use map to get data I want
        .pipe(
          tap(heroes => this.log('fetched heroes')),
          catchError(this.handleError('getHeroes', []))
        );
    } 
    */
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
//import 'rxjs/Rx';
/*
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
*/


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private searchUrl: string;
  constructor(private _http: HttpClient) {

  }
  
  seachMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    console.log(this._http.get(this.searchUrl))
    return this._http.get(this.searchUrl)
          .pipe(map(res => res.json()));
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
  }
}

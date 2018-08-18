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
  //use the url as a link
  searchMusic(str: string, type = 'Artist') {
    var scopes = 'user-read-private user-read-email';
    const my_client_id = 'e3f65d89b67b45eba3afca4d97595275';
    const redirect_uri = 'http://localhost:4200/'
    this.searchUrl = 'https://accounts.spotify.com/authorize' +
      '?response_type=code' + '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri)

      /*app.get('/login', function(req, res) {      
        res.redirect();
      });*/

    return this._http.get(this.searchUrl)
      .pipe(
        map(res => console.log(res))
      )
    }

    searchMusicORIG(str: string, type = 'artist') {
    const accessToken = 'BQC_lBxoN9ABVb0R5fuszVCMg43Fvifu8VkZ6zai9OIirJrETv6HbBl0F_4lhKDnmnrW9SGa6JwmYqIEkQY';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  'Bearer ' + accessToken);
    let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}

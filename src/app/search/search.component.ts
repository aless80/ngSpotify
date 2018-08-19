import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';


import { Observable, of } from 'rxjs'; //Observable returned with asynch operation
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../../../Artist';

//https://stackoverflow.com/questions/41879145/get-an-users-playlist-with-spotify-api-how-to-add-access-token-in-http-request
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;
  searchRes: Artist[];
  accessToken: string = '';

  constructor(private _spotifyService:SpotifyService) { }

  search() {
    this._spotifyService.searchMusic(this.accessToken, this.searchStr)
        .subscribe(res => {
          //catchError((e) => this.handleError(e)),
          this.searchRes = res.artists.items;
        });
  }
  
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return of(error.message || error);
  }
  ngOnInit() {  }

}

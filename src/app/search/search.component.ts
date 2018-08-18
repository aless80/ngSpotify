import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';


import { Observable, of } from 'rxjs'; //Observable returned with asynch operation
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  SearchStr: string;

  constructor(private _spotifyService:SpotifyService) { 
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.SearchStr)
        .subscribe(res => {
          //catchError((e) => this.handleError(e)),
          console.log(res);//.artists.items);
        });
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return of(error.message || error);
  }
  ngOnInit() {  }

}

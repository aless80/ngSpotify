import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;

  searchMusic(){
    this._spotifyService.seachMusic(this.searchStr)
        .subscribe(res => {
          console.log(res.artists.items);
        });
  }
/*
  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
        this.searchRes = res.artists.items;
    });
  }
  */

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];
  constructor(
    private _spotifyService: SpotifyService,
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .pipe(
        map(params => params['id'])
      )
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })

        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.artists;
          })
      })
  }

}

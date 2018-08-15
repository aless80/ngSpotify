import {Component} from '@angular/core';
import {SpotifyService} from './spotify.service';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [SearchComponent, AboutComponent],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'ngspotify';
}

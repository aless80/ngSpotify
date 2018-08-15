import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  //directives: [NavbarComponent],
  styleUrls: ['./app.component.css'],
  entryComponents: [SearchComponent, AboutComponent]
})
export class AppComponent {
  title = 'ngspotify';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //NEW
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AppRoutesModule } from './app-routes.module';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpModule  //NEW
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

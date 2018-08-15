import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { provideRouterInitializer } from '@angular/router/src/router_module';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default to dashboard component
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];
/*export const AppRouterProviders = [
  provideRouter(routes);
]*/


@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutesModule { }

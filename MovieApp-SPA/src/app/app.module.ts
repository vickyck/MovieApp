import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routes';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './movie/movielist/movielist.component';
import { MovieListResolver } from './_resolvers/movie-list.resolver';
//import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerGestureConfig } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieComponent,
    MovielistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    MovieListResolver,
    //PreventUnsavedChanges,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

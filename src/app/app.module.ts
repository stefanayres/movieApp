import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieTimesComponent } from './movie-times/movie-times.component';
import { LocationComponent } from './location/location.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoviesService } from './service/movies.service';
import { GlobalService } from './global.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; // not using mdbootstrap
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieTimesComponent,
    LocationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxSpinnerModule,
    NgxSmartModalModule.forRoot(),
  ],
  providers: [
    MoviesService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

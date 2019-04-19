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
import { ClosestShowingComponent } from './closest-showing/closest-showing.component';

import {HttpClient} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SwapLanguageComponent } from './swap-language/swap-language.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieTimesComponent,
    LocationComponent,
    HeaderComponent,
    FooterComponent,
    ClosestShowingComponent,
    SwapLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxSpinnerModule,
    NgxSmartModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  //  translateModule
  ],
  providers: [
    MoviesService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

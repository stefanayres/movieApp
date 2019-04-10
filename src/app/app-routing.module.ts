import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieTimesComponent } from './movie-times/movie-times.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '',           component:LocationComponent },
  { path: 'listMovies/:id', component:MoviesComponent },
  { path: 'movie/:id', component:MovieComponent },
  { path: 'showtime/:id', component:MovieTimesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieTimesComponent } from './movie-times/movie-times.component';
import { LocationComponent } from './location/location.component';
import { ClosestShowingComponent } from './closest-showing/closest-showing.component';

const routes: Routes = [
  { path: '',               component:LocationComponent },
  { path: 'listMovies/:location', component:MoviesComponent },
  { path: 'movie/:movie/:filmId',   component:MovieComponent },
  { path: 'showings', component:ClosestShowingComponent},
  { path: 'showtime/:id',   component:MovieTimesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

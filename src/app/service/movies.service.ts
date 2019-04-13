import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private location: any = null;

  constructor(
    private http: HttpClient,
    private Global: GlobalService
  ) {
    this.location = this.Global.getGeo();
   }

  omdbApi: any = 'db203e5e';
  moviebdApi: any = '7b368fb69167a2d40c7c86bd6a293029';

  showmovies(location: any) {
    console.log(location);
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy.php?loc=${location}`);
  }

  showmovie(id: number){
    return this.http.get(`https://www.omdbapi.com/?i=tt${id}&apikey=${this.omdbApi}`);
  }

  getTrailer(id: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${this.moviebdApi}`);
  }


}

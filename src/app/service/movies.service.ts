import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from  "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) {

    // console.log("The lat is: " + sessionStorage.lat); // use to pass geo to api
    // console.log("The long is: " + sessionStorage.long);
   }

  omdbApi: any = 'db203e5e';
  moviebdApi: any = '7b368fb69167a2d40c7c86bd6a293029';

  showmovies(location: any) {
    console.log("service" + location); 
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy.php?loc=${location}`);
  }

  showmovie(id: number){
    return this.http.get(`https://www.omdbapi.com/?i=tt${id}&apikey=${this.omdbApi}`);
  }

  getTrailer(id: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${this.moviebdApi}`);
  }

  closeShowings(lat: any, lon: any, id: any){
    const  params = new  HttpParams({fromString:  'lat='+lat+'&lon='+lon+'&id='+id+''});
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy-cinemas.php`
    , {params});
  }

  // closeShowings(lat: any, lon: any, id: any){
  //   let data = {limit: "2"};
  //   return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy-cinemas.php?lat=${lat}&lon=${lon}&id=${id}`
  //   , {params: params});
  // }


}

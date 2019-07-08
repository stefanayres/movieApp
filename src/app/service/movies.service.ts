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
    // console.log("The lat is: " + sessionStorage.lat);
    // console.log("The long is: " + sessionStorage.long);
   }

  omdbApi: any = '********';
  moviebdApi: any = '******************';

  showmovies(location: any) {
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy.php?loc=${location}`); // https://www.stefandesigns.org/cors/cors-proxy.php
  } // http://localhost:8888/cors-proxy/cors-proxy.php

  showmovie(id: number){
    return this.http.get(`https://www.omdbapi.com/?i=tt${id}&apikey=${this.omdbApi}`);
  }

  getTrailer(id: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${this.moviebdApi}`);
  }

  getPoster(){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.moviebdApi}`);
  }

  closeShowings(lat: any, lon: any, id: any){
    const  params = new  HttpParams({fromString:  'lat='+lat+'&lon='+lon+'&id='+id+''});
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy-cinemas.php` // https://www.stefandesigns.org/cors/cors-proxy-cinemas.php
    , {params});
  } // http://localhost:8888/cors-proxy/cors-proxy-cinemas.php`


}

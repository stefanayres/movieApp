import { Injectable, Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private geo;
  private movieId;

  constructor() { }

      setGeo(val) {
        this.geo = val;
      }
      getGeo() {
        return this.geo;
      }

      setMovieId(val){
        this.movieId = val;
      }
      getMovieId(){
        return this.movieId;
      }

    }

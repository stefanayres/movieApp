import { Injectable, Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private geo;

  constructor() { }

      setGeo(val) {
          this.geo = val;
      }
      getGeo() {
          return this.geo;
      }
    }

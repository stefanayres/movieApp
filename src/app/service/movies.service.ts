import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  //url = environment.url;

  showmovies() {

    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy.php/`);
          }


}

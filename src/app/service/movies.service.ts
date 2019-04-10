import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  //url = environment.url;

  showmovies(location: any) {
    console.log(location);
    return this.http.get(`http://localhost:8888/cors-proxy/cors-proxy.php/`);
          }

  showmovie(id: number){
    return this.http.get(`https://www.omdbapi.com/?i=tt${id}&apikey=db203e5e`);
  }

          // callApi(Longitude: number, Latitude: number){
          //   const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
          //   //Call API
          //   console.log(url);
          // }

}

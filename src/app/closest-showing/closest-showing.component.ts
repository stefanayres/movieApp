import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-closest-showing',
  templateUrl: './closest-showing.component.html',
  styleUrls: ['./closest-showing.component.scss']
})
export class ClosestShowingComponent implements OnInit {
  cinemas: any;
  lat: any;
  lon: any;
  filmId: any;

  constructor(
    private spinner: NgxSpinnerService,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.lat    = sessionStorage.lat; // latitude from LocationComponent stored in sessionStorage
    this.lon    = sessionStorage.long; // longitude from LocationComponent stored in sessionStorage
    this.filmId = sessionStorage.film_id; // film_id from MovieComponent stored in sessionStorage

    this.spinner.show();
    this.service.closeShowings(this.lat, this.lon, this.filmId)
        .subscribe(data => {
          this.cinemas = data as any;
          console.log(this.cinemas)
           setTimeout(() => {
                   this.spinner.hide();
               }, 900);
        });
  }

}

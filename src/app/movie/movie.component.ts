import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    safeSrc: SafeResourceUrl;
    data:     any;
    movie:    any;
    trailer:  any;
    imdbid:   any;
    key:      any;
    url:      any;
    fullUrl:  any;
    film: any;
    geo: any;
    lat: number;
    long: number;

  constructor(
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute,
    public ngxSmartModalService: NgxSmartModalService // model got from ngx website. - https://www.npmjs.com/package/ngx-smart-modal
  ) { }

  ngOnInit() {
    this.lat  = sessionStorage.lat; // latitude from LocationComponent stored in sessionStorage
    this.long = sessionStorage.long; // longitude from LocationComponent stored in sessionStorage

    this.route.paramMap.subscribe(params => {
      this.data = params.get("movie") // imdb id from MoivesComponent
    })
    this.route.paramMap.subscribe(params => {
      this.film = params.get("filmId") // movieGLU id from MoviesComponent
    })
    sessionStorage.setItem('film_id', this.film); // storing movieGLU id in sessionStorage

    this.spinner.show();
    this.service.showmovie(this.data) // cannot add localStorage here as the user would be resetting it each time they checked out a new movie
        .subscribe((data: any) => {
          this.movie = data as any;
          this.imdbid = this.movie.imdbID;
        if (this.imdbid !== undefined){ // checking if the movie returned has imdb id if not no data shows so just return user back to movies list
          this.runGetTrailer() // now get trailer from themoviedb.org good api for trailers using imdb id
          setTimeout(() => {
                  this.spinner.hide();
              }, 900);
        }else{
            return this.router.navigate(['listMovies/' + this.lat + ';' + this.long + '', {queryParams: { registered: 'true' } }]);
          }
    });
  } // end ngOnInit

    runGetTrailer(){
      this.service.getTrailer(this.imdbid)
          .subscribe((data: any) => {
            this.trailer = data as any;
            this.key = this.trailer.results[0]; // some movies have multiple trailers, get the first one
            this.url = this.key.key;
            this.fullUrl = "https://www.youtube.com/embed/" + this.url + "";
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl // sanitizer the url
              (this.fullUrl);
          });
      }

}

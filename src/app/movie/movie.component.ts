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

  constructor(
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute,
    public ngxSmartModalService: NgxSmartModalService
  ) {
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
    this.data = params.get("movie")
  })

  this.spinner.show();
  this.service.showmovie(this.data)
      .subscribe((data: any) => {
        this.movie = data as any;
        console.log(this.movie);
        this.imdbid = this.movie.imdbID;
        if (this.imdbid !== undefined){
        this.runGetTrailer()
        setTimeout(() => {
                this.spinner.hide();
            }, 900);
    }else{
        return this.router.navigateByUrl('listMovies/:location');
    }
  });

  } // end ngOnInit

  runGetTrailer(){
    this.service.getTrailer(this.imdbid)
        .subscribe((data: any) => {
          this.trailer = data as any;
          this.key = this.trailer.results[0]; // some movies have multiple trailers
          this.url = this.key.key;
          this.fullUrl = "https://www.youtube.com/embed/" + this.url + "";
          this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl
            (this.fullUrl);
        });
      }

}

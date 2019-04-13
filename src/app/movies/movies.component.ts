import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
 //https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: any;
    data: any;
    private geo: any = null;

  constructor(
    private spinner: NgxSpinnerService,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute,
    private Global: GlobalService
  ) {
    this.geo = this.Global.getGeo();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.data = params.get("location")
    })

    console.log(this.geo);
    this.spinner.show();
    this.service.showmovies(this.data)
        .subscribe(data => {
          this.movies = data as any;
           setTimeout(() => {
                   this.spinner.hide();
               }, 900);
        });
      };
  }

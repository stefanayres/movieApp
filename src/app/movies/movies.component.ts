import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
 //https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
 import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: any;
    data: any;

  constructor(
    private spinner: NgxSpinnerService,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.data = params.get("location")
    })

    this.spinner.show();
    this.service.showmovies(this.data)
        .subscribe(data => {
          this.movies = data as any;
          console.log(this.movies);
           //this.spinner.hide();
           setTimeout(() => {
                   this.spinner.hide();
               }, 1500);
        });
      };






}

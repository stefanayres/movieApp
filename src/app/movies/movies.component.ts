import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.showmovies()
        .subscribe(data => {
          this.movies = data as any;
          console.log(this.movies);
        });
      }


}

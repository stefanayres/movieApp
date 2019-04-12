import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
 //https://medium.com/@christo8989/angular-6-url-parameters-860db789db85

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
    movies: any;
    data: any;

  constructor(
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.data = params.get("location")
    })
console.log(this.data);

    this.service.showmovies(this.data)
        .subscribe(data => {
          this.movies = data as any;
          console.log(this.movies);
        });
      }


}

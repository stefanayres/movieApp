import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  data: any;
  movie: any;

  constructor(
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.data = params.get("id")
  })
    console.log(this.data);

    this.service.showmovie(this.data)
        .subscribe((data: any) => {
          if (data !== undefined){
          this.movie = data as any;
          console.log(this.movie);
        }else{
          return this.router.navigateByUrl('/movies/:id');
        }
        });
      }

}

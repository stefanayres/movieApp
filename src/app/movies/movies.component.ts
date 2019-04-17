import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
 //https://medium.com/@christo8989/angular-6-url-parameters-860db789db85
import { NgxSpinnerService } from 'ngx-spinner';
//import { GlobalService } from '../global.service'; // not used

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
    movies: any;
    data: any;
    movieId: number;
    showNav = true;

  constructor(
    private spinner: NgxSpinnerService,
    private service: MoviesService,
    private router: Router,
    private route : ActivatedRoute
    //private Global: GlobalService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.data = params.get("location")
    })

    this.spinner.show();
    if(localStorage.getItem('moviesData') === null){
      this.service.showmovies(this.data)
          .subscribe(data => {
            this.movies = data as any;
            localStorage.setItem('moviesData', JSON.stringify(this.movies)); // learned storing js objects here from https://www.competa.com/blog/storing-javascript-object-localstorage/
             setTimeout(() => {
                     this.spinner.hide();
                 }, 900);
          });
      }else{
        this.movies = JSON.parse(localStorage.getItem('moviesData'));
        this.spinner.hide();
        console.log(JSON.parse(localStorage.getItem('moviesData')));
      }
  }; // end ngOnInit


}

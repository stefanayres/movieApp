import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title = 'Movies Near You';

    pageLinks = [
      {path: '/',           name: 'Home'},
      {path: '/listMovies/:location',   name: 'List Movies'},
      { path: '**', redirectTo: '' }
    ];

  constructor() { }

  ngOnInit() {
  }

}

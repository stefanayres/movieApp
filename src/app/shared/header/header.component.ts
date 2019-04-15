import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title = 'Movies Near You';
    geo: any;

    pageLinks = [
      {path: '/',           name: 'Home'},
      {path: '/listMovies/:location',   name: 'List Movies'},
      { path: '**', redirectTo: '' }
    ];

  constructor(private _location: Location) { }

  ngOnInit() {

  }

  backClicked() {
    this._location.back();
  }

}

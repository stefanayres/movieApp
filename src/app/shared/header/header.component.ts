import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Movies Near You';
  isRoot: boolean;

  pageLinks = [
    {path: '/',           name: 'Home'},
    { path: '**', redirectTo: '' }
  ];

  constructor(
    private _location: Location,
    private router: Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
      this.router.events.subscribe(event => {
      if (this._location.path() !== '') {
        this.isRoot = false;
      } else {
        this.isRoot = true;
      }
    });
   }

  backClicked() {
    this._location.back();
  }

}

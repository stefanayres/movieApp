import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('fade',
    [
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class HeaderComponent implements OnInit {
  title = 'Movies Near You';
  isRoot: boolean;


  pageLinks = [
    {path: '/',   name: 'Home'},
    { path: '**', redirectTo: '' }
  ];

  constructor(
    @Inject(DOCUMENT) document,
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
// code from http://joeljoseph.net/angular-sticky-header-on-scroll/ for sticky nav bar
   @HostListener('window:scroll', ['$event'])
   onWindowScroll(e) {
      if (window.pageYOffset > 220) {
        let element = document.getElementById('navbar');
        element.classList.add('sticky');
      } else {
       let element = document.getElementById('navbar');
         element.classList.remove('sticky');
      }
   }

  backClicked() {
    this._location.back();
  }

}

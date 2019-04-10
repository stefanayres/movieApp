import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  location: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route : ActivatedRoute
    //private location: LocationService
  ) { }

  ngOnInit() {
  if (!("geolocation" in navigator)) {
    alert('Your device cannot be used to find your location...');
  }
console.log(this.location);

  const getLocationLink     = document.querySelector('#getLocation');
  const manualLocationInput = document.querySelector('#manualLocation');
  const feedbackDiv         = document.querySelector('#feedback');

  function getPositionSuccess(pos, location: any){

    console.log(pos);

    const latitude  = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    location = latitude + ';' + longitude;

    //console.log(location);

    feedbackDiv.innerHTML = `
      <p><strong>Latitude:</strong> ${latitude}<br>
      <strong>Longitude:</strong> ${longitude}<br>

      <div>
        <a [routerLink]='/listMovies/${location}'>Find Movies Near Me - ${location}</a>
      </div>
    `;
  }

  function getPositionFailure(_err: any) {
    feedbackDiv.innerHTML = 'Error retrieving location.';
  }

  getLocationLink
    .addEventListener('click', _e => {
      feedbackDiv.innerHTML = 'Looking...';
      navigator
        .geolocation
        .getCurrentPosition(
          getPositionSuccess,
          getPositionFailure
        );

    });

  manualLocationInput
    .addEventListener('change', () => {
      feedbackDiv.innerHTML = 'Looking...';
      // navigator
      //   .geolocation
      //   .getCurrentPosition(
      //     getPositionSuccess,
      //     getPositionFailure
      //   );
    });

}


} // end of ngOnInIt

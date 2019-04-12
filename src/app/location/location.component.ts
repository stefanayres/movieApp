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

lat: any;
long: any;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route : ActivatedRoute
    //private location: LocationService
  ) { }

  cities = [{'name':'Dundalk','lat': '54.003927', 'long': '-6.402207'}, //54.003927, -6.402207
            {'name':'-None-','lat': '0', 'long': '0'},
            {'name':'Droghada','lat': '53.714452', 'long': '-6.351818'},//53.714452, -6.351818
            {'name':'Cavan','lat': '53.990751', 'long': '-7.362873'},//53.990751, -7.362873
            {'name':'Galway','lat': '53.270695', 'long': '-9.061707'},//53.270695, -9.061707
            {'name':'Cork','lat': '51.897617', 'long': 'te-8.473983'}, //51.897617, -8.473983
            {'name':'Dublin','lat': '53.346293', 'long': '-6.275564'}]; //53.346293, -6.275564
  selectedCity = this.cities[1];

  onChange(city) {
    this.lat = city.lat;
    this.long = city.long;
    console.log(city.lat);
    console.log(city.long);
  }

  ngOnInit() {
  if (!("geolocation" in navigator)) {
    alert('Your device cannot be used to find your location...');
  }

  const getLocationLink     = document.querySelector('#getLocation');
  const manualLocationInput = document.querySelector('#manualLocation');
  const feedbackDiv         = document.querySelector('#feedback');

  function getPositionSuccess(pos){

    this.lat = pos.coords.latitude;
    this.long = pos.coords.longitude;
    console.log(this.lat);
    console.log(this.long);


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

      });

  }// end of ngOnInit

}

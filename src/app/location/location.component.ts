import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service'; // changed to localstorage - keeping code as ref

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  lat: any;
  long: any;
  geo: any;

  constructor(
    private Global: GlobalService, // changed to localstorage - keeping code as ref
    private httpClient: HttpClient,
    private router: Router,
    private route : ActivatedRoute
    //private location: LocationService
  ) { }

  ngOnInit() {
  if (!("geolocation" in navigator)) {
    alert('Your device cannot be used to find your location...');
  }


  const getLocationLink     = document.querySelector('#getLocation');
  const feedbackDiv         = document.querySelector('#feedback');
  const locationServiceOpts = {enableHighAccuracy: true}

  function getPositionSuccess(pos){
    console.log(pos);

    // this.lat = pos.coords.latitude; // error here, wont pass this point
    // this.long = pos.coords.longitude;

    const latLocal  = pos.coords.latitude;
    const longLocal = pos.coords.longitude;

    this.lat = latLocal;
    this.long = longLocal;

    console.log(latLocal); // will not show now.

    console.log(this.lat);
    console.log(this.long);
    this.geo = this.lat + this.long;
    sessionStorage.setItem('geo', this.geo);
    sessionStorage.setItem('lat', this.lat);
    sessionStorage.setItem('long', this.long);
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
              getPositionFailure,
              locationServiceOpts
        );

    });

  }// end of ngOnInit

  SetGlobalData() { // set the geo var to global var for use else where.---changed to localstorage - keeping code as ref
        this.Global.setGeo(this.geo);
    }

  cities = [{'name':'Dundalk','lat': '54.003927', 'long': '-6.402207'}, //54.003927, -6.402207
            {'name':'-None-','lat': '0', 'long': '0'},
            {'name':'Droghada','lat': '53.714452', 'long': '-6.351818'},//53.714452, -6.351818
            {'name':'Cavan','lat': '53.990751', 'long': '-7.362873'},//53.990751, -7.362873
            {'name':'Galway','lat': '53.270695', 'long': '-9.061707'},//53.270695, -9.061707
            {'name':'Cork','lat': '51.897617', 'long': '-8.473983'}, //51.897617, -8.473983
            {'name':'Dublin','lat': '53.346293', 'long': '-6.275564'}]; //53.346293, -6.275564
  selectedCity = this.cities[1];

  onChange(city: any) {
    this.lat = city.lat;
    this.long = city.long;
    this.geo = this.lat + this.long; // saving the data to global var
    sessionStorage.setItem('geo', this.geo);
    sessionStorage.setItem('lat', this.lat);
    sessionStorage.setItem('long', this.long);
console.log("location component " + sessionStorage.geo + ".");
  }


}

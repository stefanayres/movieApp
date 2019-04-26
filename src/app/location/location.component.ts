import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { GlobalService } from '../global.service'; // changed to localstorage - keeping code as ref
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  lat: any;
  long: any;

  constructor(
    // private Global: GlobalService, // changed to localstorage - keeping code as ref
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  if (!("geolocation" in navigator)) {
    alert('Your device cannot be used to find your location...');
  }

  const getLocationLink     = document.querySelector('#getLocation');
  const feedbackDiv         = document.querySelector('#feedback');
  const locationServiceOpts = {enableHighAccuracy: true}

  function getPositionSuccess(pos){ // gets user location from geolocation.getCurrentPosition

    this.lat  = pos.coords.latitude;
    this.long = pos.coords.longitude;
    sessionStorage.setItem('lat', this.lat); // stores latitude for closest-showing.component only for the session
    sessionStorage.setItem('long', this.long); // stores Longitude for closest-showing.component only for the session
    this.deleteLocal(); // calls the delete function when the user picks new location
  }

  function getPositionFailure(_err: any) {
    feedbackDiv.innerHTML = 'Error retrieving location.';
  }

  getLocationLink
    .addEventListener('click', _e => {
      navigator
        .geolocation
          .getCurrentPosition(
            getPositionSuccess.bind(this), // ref shane for (bind(this))
              getPositionFailure.bind(this),
              locationServiceOpts
        );

    });

  }// end of ngOnInit

  // SetGlobalData() { // ---changed to localstorage - keeping code as ref
  //       this.Global.setGeo(this.geo);
  //   }

  cities = [{'name':'Dundalk','lat': '54.003927', 'long': '-6.402207'}, //54.003927, -6.402207
            {'name':'-None-','lat': '0', 'long': '0'},
            {'name':'Droghada','lat': '53.714452', 'long': '-6.351818'},//53.714452, -6.351818
            {'name':'Cavan','lat': '53.990751', 'long': '-7.362873'},//53.990751, -7.362873
            {'name':'Galway','lat': '53.270695', 'long': '-9.061707'},//53.270695, -9.061707
            {'name':'Cork','lat': '51.897617', 'long': '-8.473983'}, //51.897617, -8.473983
            {'name':'Dublin','lat': '53.346293', 'long': '-6.275564'}]; //53.346293, -6.275564
  selectedCity = this.cities[1];

  onChange(city: any) { // gets user location from array above
    this.lat = city.lat;
    this.long = city.long;
    sessionStorage.setItem('lat', this.lat); // stores latitude for closest-showing.component only for the session
    sessionStorage.setItem('long', this.long); // stores Longitude for closest-showing.component only for the session
    this.deleteLocal(); // calls the delete function when the user picks new location
  }

  deleteLocal(){ // delete local storage of movie list
    localStorage.removeItem('moviesData');
  }

}

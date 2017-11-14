import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../../service/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() {
    if (navigator.geolocation) {
      this.getCurrentCoordinates();
    }
  }

  getCurrentCoordinates() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.getCurrentWeather(lat, long);
      this.getFiveDayForecast(lat, long);
    });
  }

  getCurrentWeather(lat: number, long: number) {
    return this._weatherService.getCurrentWeather(lat, long);
  }

  getFiveDayForecast(lat: number, long: number) {
    return this._weatherService.getFiveDayForecast(lat, long);
  }

}

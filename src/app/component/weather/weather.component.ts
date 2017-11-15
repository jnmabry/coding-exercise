import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../../service/weather/weather.service';
import { Weather } from '../../service/weather/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  currentWeather: any = {};
  fiveDayForecast: Weather[] = [];

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
    this._weatherService.getCurrentWeather(lat, long)
    .subscribe(data => {
      const currentWeather = new Weather(data);
      this.currentWeather = currentWeather;
      console.log(currentWeather);
      }, error => { console.log(error); }
    );
  }

  getFiveDayForecast(lat: number, long: number) {
    this._weatherService.getFiveDayForecast(lat, long)
    .subscribe(data => {
      const fiveDayForecast: Weather[] = data['list'].map((singleWeather) => new Weather(singleWeather) );
      this.fiveDayForecast = fiveDayForecast;
      console.log(fiveDayForecast);
      }, error => { console.log(error); }
    );
  }

}

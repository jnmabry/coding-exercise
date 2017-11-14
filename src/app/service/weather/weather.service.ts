import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { Weather } from '../weather/weather.model';

@Injectable()
export class WeatherService {

  currentWeather: any = {};
  fiveDayForecast: Weather[] = [];

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, long: number) {
    this.http.get(CONFIG.OWM_URL + 'weather?lat=' + lat + '&lon=' + long + '&units=imperial&APPID=' + CONFIG.OWM_KEY)
    .subscribe(data => {
      this.currentWeather = new Weather(data);
      console.log(this.currentWeather);
    });
  }

  getFiveDayForecast(lat: number, long: number) {
    this.http.get(CONFIG.OWM_URL + 'forecast?lat=' + lat + '&lon=' + long + '&units=imperial&APPID=' + CONFIG.OWM_KEY)
    .subscribe(data => {
      this.fiveDayForecast = data['list'].map((singleWeather) => new Weather(singleWeather) );
      console.log(this.fiveDayForecast);
    });
  }

}

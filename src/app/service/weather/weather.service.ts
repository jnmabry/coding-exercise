import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { Weather } from '../weather/weather.model';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, long: number) {
    return this.http.get(CONFIG.OWM_URL + 'weather?lat=' + lat + '&lon=' + long + '&units=imperial&APPID=' + CONFIG.OWM_KEY);
  }

  getFiveDayForecast(lat: number, long: number) {
    return this.http.get(CONFIG.OWM_URL + 'forecast?lat=' + lat + '&lon=' + long + '&units=imperial&APPID=' + CONFIG.OWM_KEY);
  }

}

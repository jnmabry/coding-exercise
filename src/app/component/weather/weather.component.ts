import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../../service/weather/weather.service';
import { Weather } from '../../service/weather/weather.model';
import { LoaderService } from '../../service/loader/loader.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit, OnDestroy {

  currentWeather: any = {};
  fiveDayForecast: Weather[] = [];
  loaderClass: Observable<string>;

  constructor(private _weatherService: WeatherService,
    private _loaderService: LoaderService) {
    this.loaderClass = this._loaderService.getLoaderClass();
  }

  ngOnInit() {
    this._loaderService.show();
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
      }, error => {
        console.log(error);
        // Show error message on Screen
      }, () => {

      }
    );
  }

  getFiveDayForecast(lat: number, long: number) {
    this._weatherService.getFiveDayForecast(lat, long)
    .subscribe(data => {
      const fiveDayForecast: Weather[] = data['list'].map((singleWeather) => new Weather(singleWeather) );
      this.filterForecast(fiveDayForecast);
      }, error => {
        console.log(error);
        // Show error message on Screen
      }, () => {
        this._loaderService.hide();
      }
    );
  }

  filterForecast(fiveDayForecast: Weather[]) {
    this.fiveDayForecast = fiveDayForecast.filter(weather => {
      return new Date(weather.time).getHours() === 13;
    });
  }

  ngOnDestroy() {

  }

}

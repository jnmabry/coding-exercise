import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrentForecastComponent implements OnInit {

  @Input() currentWeather;

  // currentWeather: any = {
  //   cityName: 'Lexington',
  //   temp: '90°',
  //   tempHigh: '92°',
  //   tempLow: '80°',
  //   humidity: '10%',
  //   time: 'Wednesday, November 15th 9:00 P.M.',
  //   description: 'partly cloudy',
  //   descriptionId: 500,
  //   cloudiness: '90%'
  // };

  constructor() { }

  ngOnInit() {
  }

}

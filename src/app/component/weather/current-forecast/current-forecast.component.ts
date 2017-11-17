import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrentForecastComponent implements OnInit {

  @Input() currentWeather;

  constructor() { }

  ngOnInit() {
  }

}

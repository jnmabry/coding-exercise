import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'single-day-forecast',
  templateUrl: './single-day-forecast.component.html',
  styleUrls: ['./single-day-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleDayForecastComponent implements OnInit {

  @Input() day;

  constructor() { }

  ngOnInit() {
  }

}

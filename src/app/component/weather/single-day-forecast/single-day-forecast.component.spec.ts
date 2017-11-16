import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDayForecastComponent } from './single-day-forecast.component';

describe('SingleDayForecastComponent', () => {
  let component: SingleDayForecastComponent;
  let fixture: ComponentFixture<SingleDayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

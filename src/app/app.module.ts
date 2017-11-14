import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { StocksComponent } from './component/stocks/stocks.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

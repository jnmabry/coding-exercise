import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { StocksComponent } from './component/stocks/stocks.component';

// Services
import { WeatherService } from './service/weather/weather.service';
import { StocksService } from './service/stocks/stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    WeatherService,
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

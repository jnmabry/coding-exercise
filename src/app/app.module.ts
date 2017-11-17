import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { StocksComponent } from './component/stocks/stocks.component';
import { LoaderComponent } from './component/loader/loader.component';


// Services
import { WeatherService } from './service/weather/weather.service';
import { StocksService } from './service/stocks/stocks.service';
import { LoaderService } from './service/loader/loader.service';

// Angular Material Modules
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { SingleDayForecastComponent } from './component/weather/single-day-forecast/single-day-forecast.component';
import { CurrentForecastComponent } from './component/weather/current-forecast/current-forecast.component';
import { SingleStockComponent } from './component/stocks/single-stock/single-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    StocksComponent,
    SingleDayForecastComponent,
    CurrentForecastComponent,
    SingleStockComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    WeatherService,
    StocksService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

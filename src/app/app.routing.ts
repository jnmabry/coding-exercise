import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { StocksComponent } from './component/stocks/stocks.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent, pathMatch: 'full'},
  { path: 'stocks', component: StocksComponent, pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

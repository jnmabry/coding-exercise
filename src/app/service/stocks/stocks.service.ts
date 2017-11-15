import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  getStockQuotes() {
    return this.http.get(CONFIG.BARCHAR_URL + CONFIG.BARCHART_KEY +
      '&symbols=AAPL%2CGOOG&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate&mode=I&jerq=false');
  }

}

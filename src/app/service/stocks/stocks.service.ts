import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class StocksService {

  private quoteTimer: Observable<any> = Observable.timer(0, 300000);
  private stockQuotes = new Subject<any>();

  constructor(private http: HttpClient) {
    this.startQuoteTimer();
  }

  startQuoteTimer(): Subscription {
    return this.quoteTimer.subscribe( t =>
      this.getStockQuotes()
    );
  }

  getStockQuotes(): Subscription {
   return this.http.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,googl,msft,amzn&types=quote&filter=symbol,latestPrice,change,iexRealtimePrice,changePercent,previousClose,latestVolume').subscribe(quote =>
    this.stockQuotes.next(quote)
   );
  }

  gotStockQuotes(): Observable<any> {
    return this.stockQuotes.asObservable();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';


@Injectable()
export class StocksService {

  private quoteTimer: Observable<any>;
  private stockQuotes = new Subject<any>();

  constructor(private http: HttpClient) {
    this.quoteTimer = Observable.timer(0, 5000);
    this.quoteTimer.subscribe( t =>
      this.getStockQuotes()
    );
  }

  getStockQuotes() {
   return this.http.get('https://api.iextrading.com/1.0/stock/aapl/quote').subscribe(quote =>
    this.stockQuotes.next(quote)
   );
  }

  gotStockQuotes(): Observable<any> {
    return this.stockQuotes.asObservable();
  }

}

// private clock: Observable<Date>;

//   constructor() {
//     this.clock = Observable.interval(1000).map(tick => new Date()).share();
//   }

//   getClock(): Observable<Date> {
//     return this.clock;
//   }
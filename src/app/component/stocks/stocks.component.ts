import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { StocksService } from '../../service/stocks/stocks.service';
import { Stock } from '../../service/stocks/stock.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StocksComponent implements OnInit, OnDestroy {

  stockQuotes: Stock[] = [
    { change: 0.039835,
      changePercent: 0.028,
      iexRealtimePrice: 158.71,
      latestPrice: 158.73,
      latestVolume: 20567140,
      previousClose: 158.73,
      symbol: 'AAPL'
    },
    { change: 0.039835,
      changePercent: 0.028,
      iexRealtimePrice: 158.71,
      latestPrice: 158.73,
      latestVolume: 20567140,
      previousClose: 158.73,
      symbol: 'AAPL'
    },
    { change: 0.039835,
      changePercent: 0.028,
      iexRealtimePrice: 158.71,
      latestPrice: 158.73,
      latestVolume: 20567140,
      previousClose: 158.73,
      symbol: 'AAPL'
    },
    { change: 0.039835,
      changePercent: 0.028,
      iexRealtimePrice: 158.71,
      latestPrice: 158.73,
      latestVolume: 20567140,
      previousClose: 158.73,
      symbol: 'AAPL'
    },
  ];

  quoteSubscription: Subscription;

  constructor(private _stocksService: StocksService) { }

  ngOnInit() {
    // this.getStockQuotes();
  }

  getStockQuotes() {
    this.quoteSubscription = this._stocksService.gotStockQuotes()
    .subscribe(quotes => {
      this.stockQuotes.length = 0;
      this.addToStockArray(quotes);
    });
  }

  ngOnDestroy() {
    this.quoteSubscription.unsubscribe();
    this._stocksService.startQuoteTimer().unsubscribe();
  }

  addToStockArray(stockQuotesObject: any) {
    for (const key in stockQuotesObject) {
      if (key) { this.stockQuotes.push(new Stock(stockQuotesObject[key])); }
    }
  }

}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { StocksService } from '../../service/stocks/stocks.service';
import { LoaderService } from '../../service/loader/loader.service';
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

  stockQuotes: Stock[] = [];
  quoteSubscription: Subscription;
  loaderClass: Observable<string>;

  constructor(private _stocksService: StocksService,
    private _loaderService: LoaderService
  ) {
    this.loaderClass = this._loaderService.getLoaderClass();
  }

  ngOnInit() {
    this._stocksService.startTimer();
    this.getStockQuotes();
  }

  getStockQuotes() {
    this._loaderService.show();
    this.quoteSubscription = this._stocksService.gotStockQuotes()
    .subscribe(quotes => {
      this.stockQuotes.length = 0;
      this.addToStockArray(quotes);
    });
  }

  ngOnDestroy() {
    this.quoteSubscription.unsubscribe();
    this._stocksService.timerUnsubscribe();
  }

  addToStockArray(stockQuotesObject: any) {
    for (const key in stockQuotesObject) {
      if (key) { this.stockQuotes.push(new Stock(stockQuotesObject[key])); }
    }
    this._loaderService.hide();
  }

}

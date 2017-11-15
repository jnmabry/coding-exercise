import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StocksService } from '../../service/stocks/stocks.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StocksComponent implements OnInit {

  stockQuotes: any = {};
  quoteSubscription: Subscription;

  constructor(private _stocksService: StocksService) { }

  ngOnInit() {
    this.getStockQuotes();
  }

  getStockQuotes() {
    this.quoteSubscription = this._stocksService.gotStockQuotes()
    .subscribe(quotes => {
      console.log(quotes.latestUpdate);
      this.stockQuotes = quotes;
    });
  }

}

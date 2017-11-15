import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StocksService } from '../../service/stocks/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StocksComponent implements OnInit {

  constructor(private _stocksService: StocksService) { }

  ngOnInit() {
    this.getStockQuotes();
  }

  getStockQuotes() {
    this._stocksService.getStockQuotes()
    .subscribe(data => {
      console.log(data);
    });
  }

}

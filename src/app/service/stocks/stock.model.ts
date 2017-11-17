export class Stock {

  change: number;
  changePercent: number;
  iexRealtimePrice: number;
  latestPrice: number;
  latestVolume: number;
  previousClose: number;
  symbol: string;

  constructor(json: any) {
    this.change = json.quote.change ? json.quote.change : 0;
    this.changePercent = json.quote.changePercent ? json.quote.change : 0;
    this.iexRealtimePrice = json.quote.iexRealtimePrice ? json.quote.iexRealtimePrice : 0;
    this.latestPrice = json.quote.latestPrice ? json.quote.latestPrice : 0;
    this.latestVolume = json.quote.latestVolume ? json.quote.latestVolume : 0;
    this.previousClose = json.quote.previousClose ? json.quote.previousClose : 0;
    this.symbol = json.quote.symbol ? json.quote.symbol : '';
  }

  get color() {
    if (this.latestPrice < this.previousClose) {
      return 'red';
    } else if (this.latestPrice > this.previousClose) {
      return 'green';
    } else {
      return 'black';
    }
  }

  get icon() {
    if (this.latestPrice < this.previousClose) {
      return 'fa-arrow-down';
    } else if (this.latestPrice > this.previousClose) {
      return 'fa-arrow-up';
    } else {
      return 'fa-arrow-up';
    }
  }

}

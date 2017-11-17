export class Stock {

  change: number;
  changePercent: number;
  iexRealtimePrice: number;
  latestPrice: number;
  latestVolume: number;
  previousClose: number;
  symbol: string;

  constructor(json: any) {
    this.change = json.quote.change ? json.quote.change : '';
    this.changePercent = json.quote.changePercent ? json.quote.change : '';
    this.iexRealtimePrice = json.quote.iexRealtimePrice ? json.quote.iexRealtimePrice : '';
    this.latestPrice = json.quote.latestPrice ? json.quote.latestPrice : '';
    this.latestVolume = json.quote.latestVolume ? json.quote.latestVolume : '';
    this.previousClose = json.quote.previousClose ? json.quote.previousClose : '';
    this.symbol = json.quote.symbol ? json.quote.symbol : '';
  }


}

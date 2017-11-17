import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleStockComponent implements OnInit {

  @Input() quote;

  constructor() { }

  ngOnInit() {
  }

}

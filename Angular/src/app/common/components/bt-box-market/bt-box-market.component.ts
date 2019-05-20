import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-market',
  templateUrl: './bt-box-market.component.html',
  styleUrls: ['./bt-box-market.component.scss']
})
export class BtBoxMarketComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;

  ngOnInit() {
  }

}

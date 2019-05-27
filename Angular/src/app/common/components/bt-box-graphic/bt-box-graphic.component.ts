import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-graphic',
  templateUrl: './bt-box-graphic.component.html',
  styleUrls: ['./bt-box-graphic.component.scss']
})
export class BtBoxGraphicComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  myType = 'LineChart';
  myColumnNames = ['Time', 'Odds'];
  myTitle = 'Fluctuación de cuotas';

  ngOnInit() {
  }

}

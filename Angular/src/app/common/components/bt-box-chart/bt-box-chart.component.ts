import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-chart',
  templateUrl: './bt-box-chart.component.html',
  styleUrls: ['./bt-box-chart.component.scss']
})
export class BtBoxChartComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() button;

  ngOnInit() {
  }

}

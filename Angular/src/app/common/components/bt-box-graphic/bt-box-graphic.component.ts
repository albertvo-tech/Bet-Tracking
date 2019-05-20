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
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ]; 
  myColumnNames = ['City', 'Inhabitants'];
  myTitle = 'Prueba Grafica';

  ngOnInit() {
  }

}

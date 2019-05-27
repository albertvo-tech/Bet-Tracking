import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bt-box-market',
  templateUrl: './bt-box-market.component.html',
  styleUrls: ['./bt-box-market.component.scss']
})
export class BtBoxMarketComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Output() clickedOption = new EventEmitter();

  ngOnInit() {
  }

  onClickOption() {
    if(this.data.title == 'Ganador Local') {
      this.clickedOption.emit('1');
    } else if(this.data.title == 'Empate'){
      this.clickedOption.emit('X');
    } else {
      this.clickedOption.emit('2');
    }
  }

}

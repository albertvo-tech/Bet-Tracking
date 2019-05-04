import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-home',
  templateUrl: './bt-box-home.component.html',
  styleUrls: ['./bt-box-home.component.scss']
})
export class BtBoxHomeComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;

  ngOnInit() {
  }

}

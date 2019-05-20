import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-match',
  templateUrl: './bt-box-match.component.html',
  styleUrls: ['./bt-box-match.component.scss']
})
export class BtBoxMatchComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() button;

  ngOnInit() {
  }

}

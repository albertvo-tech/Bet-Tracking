import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-notify',
  templateUrl: './bt-notify.component.html',
  styleUrls: ['./bt-notify.component.scss']
})
export class BtNotifyComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() isButton;

  ngOnInit() {
  }

}

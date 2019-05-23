import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-notify-form',
  templateUrl: './bt-notify-form.component.html',
  styleUrls: ['./bt-notify-form.component.scss']
})
export class BtNotifyFormComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() isButton;

  ngOnInit() {
  }

}

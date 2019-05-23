import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-verification',
  templateUrl: './bt-verification.component.html',
  styleUrls: ['./bt-verification.component.scss']
})
export class BtVerificationComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() isButton;

  ngOnInit() {
  }

}

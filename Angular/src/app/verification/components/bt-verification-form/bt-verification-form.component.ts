import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-verification-form',
  templateUrl: './bt-verification-form.component.html',
  styleUrls: ['./bt-verification-form.component.scss']
})
export class BtVerificationFormComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() isButton;

  ngOnInit() {
  }

}

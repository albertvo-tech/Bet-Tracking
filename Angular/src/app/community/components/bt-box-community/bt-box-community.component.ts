import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-box-community',
  templateUrl: './bt-box-community.component.html',
  styleUrls: ['./bt-box-community.component.scss']
})
export class BtBoxCommunityComponent implements OnInit {

  constructor() { }
  @Input() typeBox;
  @Input() data;
  @Input() isButton;

  ngOnInit() {
  }

}

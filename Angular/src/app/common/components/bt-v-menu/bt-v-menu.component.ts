import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-v-menu',
  templateUrl: './bt-v-menu.component.html',
  styleUrls: ['./bt-v-menu.component.scss']
})
export class BtVMenuComponent implements OnInit {

  @Input() sports;
  constructor() { }

  ngOnInit() {
  }

}

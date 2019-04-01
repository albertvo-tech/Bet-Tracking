import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-v-menu-item',
  templateUrl: './bt-v-menu-item.component.html',
  styleUrls: ['./bt-v-menu-item.component.scss']
})
export class BtVMenuItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}

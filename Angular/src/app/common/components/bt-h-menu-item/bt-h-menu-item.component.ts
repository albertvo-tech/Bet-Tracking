import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bt-h-menu-item',
  templateUrl: './bt-h-menu-item.component.html',
  styleUrls: ['./bt-h-menu-item.component.scss']
})
export class BtHMenuItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bt-h-menu-item',
  templateUrl: './bt-h-menu-item.component.html',
  styleUrls: ['./bt-h-menu-item.component.scss']
})
export class BtHMenuItemComponent implements OnInit {

  @Input() item;
  @Output() itemClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.itemClicked.emit(this.item);
  }

}

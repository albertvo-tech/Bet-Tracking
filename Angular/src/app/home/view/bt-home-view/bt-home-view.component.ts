import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bt-home-view',
  templateUrl: './bt-home-view.component.html',
  styleUrls: ['./bt-home-view.component.scss']
})
export class BtHomeViewComponent implements OnInit {

  constructor() { }
  sports = [{
    'name': 'Fútbol',
    'icon': 'https://img.icons8.com/metro/20/000000/football2.png'
  },
  { 
    'name': 'Baloncesto',
    'icon': 'https://img.icons8.com/ios/20/000000/basketball-filled.png'
  },
  {
    'name': 'Tenis',
    'icon': 'https://img.icons8.com/ios/20/000000/tennis-ball.png'
  }]
  //USING https://icons8.com/icons/
  ngOnInit() {
  }

}

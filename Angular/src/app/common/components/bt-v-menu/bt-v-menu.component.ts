import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bt-v-menu',
  templateUrl: './bt-v-menu.component.html',
  styleUrls: ['./bt-v-menu.component.scss']
})
export class BtVMenuComponent implements OnInit {

  constructor() { }
  sports: Array<any>;

  ngOnInit() {
    this.sports = [{
      'name': 'Fútbol',
      'icon': 'https://img.icons8.com/metro/20/000000/football2.png',
      'leagues': [
      {
        'name':'Liga Santander',
        'matchs': [{
          'name': 'FC Barcelona vs Real Madrid'
        }]
      },
      {
        'name':'Premier League',
        'matchs': [{
          'name': 'Manchester City vs Tottenham'
        }]
      }]
    },
    { 
      'name': 'Baloncesto',
      'icon': 'https://img.icons8.com/ios/20/000000/basketball-filled.png',
      'leagues': [
        {
          'name':'NBA',
          'matchs': [{
            'name': 'Golden State Warriors vs Houston Rockets'
          }]
        },
        {
          'name':'Euroliga',
          'matchs': [{
            'name': 'Anadolu Efes vs FC Barcelona'
          }]
        }]
    },
    {
      'name': 'Tenis',
      'icon': 'https://img.icons8.com/ios/20/000000/tennis-ball.png',
      'leagues': [
        {
          'name':'ATP Barcelona',
          'matchs': [{
            'name': 'Rafael Nadal vs David Ferrer'
          }]
        },
        {
          'name':'WTA Barcelona',
          'matchs': [{
            'name': 'XX vs YY'
          }]
        }]
    }];
    //USING https://icons8.com/icons/
  }

}

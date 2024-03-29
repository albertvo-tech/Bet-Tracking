import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'bt-v-menu',
  templateUrl: './bt-v-menu.component.html',
  styleUrls: ['./bt-v-menu.component.scss']
})
export class BtVMenuComponent implements OnInit {

  constructor(private route: Router) { }
  sports: Array<any>;
  show: boolean = true;

  ngOnInit() {
    this.sports = [{
      'name': 'Fútbol',
      'icon': 'https://img.icons8.com/metro/20/000000/football2.png',
      'leagues': [
        {
          'name': 'Brazil Serie A',
          'matchs': [{
            'name': 'Bahia vs Fluminense'
          }]
        }
      ]
    },
    {
      'name': 'Baloncesto',
      'icon': 'https://img.icons8.com/ios/20/000000/basketball-filled.png',
      'leagues': [
        {
          'name': 'NBA',
          'matchs': [{
            'name': 'Golden State Warriors vs Houston Rockets'
          }]
        },
        {
          'name': 'Euroliga',
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
          'name': 'ATP Barcelona',
          'matchs': [{
            'name': 'Rafael Nadal vs David Ferrer'
          }]
        },
        {
          'name': 'WTA Barcelona',
          'matchs': [{
            'name': 'XX vs YY'
          }]
        }]
    }];
    //USING https://icons8.com/icons/
  }

  toggleCollapse() {
    /*console.log("Before " + this.show);
    this.show = !this.show;
    console.log("After " + this.show);*/
    this.route.navigate(['/home']);
  }

  matchSelected(match) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "sportID": 153,
        "leagueID": 6,
        "matchID": 12
      }
    };
    this.route.navigate(['/match'], navigationExtras);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bt-h-menu',
  templateUrl: './bt-h-menu.component.html',
  styleUrls: ['./bt-h-menu.component.scss']
})
export class BtHMenuComponent implements OnInit {

  constructor(private route: Router) { }
  categories = [
    'Notificar cuota',
    'Verificación',
    'Comunidad'
  ];
  ngOnInit() {
  }

  navigateView(event) {
    let name = event.toLowerCase();
    name = this.translateName(name);
    this.route.navigate(['/'+ name]);
  }

  translateName(name) {
    switch(name) {
      case 'notificar cuota':
        return 'notify';
      case 'verificación':
        return('verify');
      case 'comunidad':
        return 'community'
      default:
        return 'home'
    }
  }

}

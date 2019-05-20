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
    let name = event.toLowerCase().split(' ', '');
    this.route.navigate(['/'+ name]);
  }

}

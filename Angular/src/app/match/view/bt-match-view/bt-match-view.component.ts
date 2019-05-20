import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bt-match-view',
  templateUrl: './bt-match-view.component.html',
  styleUrls: ['./bt-match-view.component.scss']
})
export class BtMatchViewComponent implements OnInit {

  constructor() { }
  data: any;
  ngOnInit() {
    this.data = [
      {
        'title': 'MÁXIMA CUOTA HASTA EL MOMENTO',
        'desc': '3.55'
      },
      {
        'title': 'MÍNIMA CUOTA HASTA EL MOMENTO',
        'desc': '1.58'
      },
      {
        'title': 'INDICAR CUOTA NOTIFICACIÓN',
        'desc': '3.20',
        'button': 'Enviar Notificación'
      },
      {
        'title': 'CASAS DE APUESTAS COMPARACIÓN',
        'desc': 'Casa 1',
        'desc2': 'Casa 2',
        'button': 'Comparar'
      },
      {
        'title': 'VISUALIZAR HANDICAP',
      },
      {
        'title': 'DESCANSO/FINAL',
      },
      {
        'title': 'OVER/UNDER GOLES',
      }
    ];
  }

}

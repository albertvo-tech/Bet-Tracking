import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bt-verification-view',
  templateUrl: './bt-verification-view.component.html',
  styleUrls: ['./bt-verification-view.component.scss']
})
export class BtVerificationViewComponent implements OnInit {
  constructor() { }
  data: any;
  ngOnInit() {
    this.data = [
      {
        'title': 'VERIFICACIÓN DEL RESULTADO',
        'desc': ' En este apartado verificaremos las predicciones de los usuarios de BetTracking.'+
        'Primero escoja un deporte, seguidamente escoja la liga de la que quiere verificar un partido.'+
        'A continuación, seleccione el partido. Una vez este en el evento deportivo deseado, seleccione el mercado'+
        'por el cual quiere hacer la verificación. Finalmente escoja su prediccion a verificar sobre el evento'+
        'Pulse verificar y nosotros nos encargaremos de que la verificación sea totalmente correcta.'
      },
      {
        'title': 'Escoge un deporte:',
        'desc': 'FUTBOL'
      },
      {
        'title': 'Escoge una liga:',
        'desc': 'Liga Santander'
      },
      {
        'title': 'Escoge un partido/evento:',
        'desc': 'FC Barcelona VS Real Madrid CF'
      },
      {
        'title': 'Escoge un mercado:',
        'desc': 'BARCELONA GANADOR'
      },
      {
        'title': 'VERIFICAR'
      },
    ];
  }
}

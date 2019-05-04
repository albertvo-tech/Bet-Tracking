import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bt-home-view',
  templateUrl: './bt-home-view.component.html',
  styleUrls: ['./bt-home-view.component.scss']
})
export class BtHomeViewComponent implements OnInit {

  constructor() { }
  data: any;
  ngOnInit() {
    this.data = [
      {
        'title': 'Notificar cuota',
        'desc': 'Texto a concretar en el que se hará una breve explicación de en que consiste exactamente esta funcionalidad.'
      },
      {
        'title': 'Verificación',
        'desc': 'Texto a concretar en el que se hará una breve explicación de en que consiste exactamente esta funcionalidad.'
      },
      {
        'title': '¿Quien somos?',
        'desc': 'Esta aplicación web esta destinada para aportar una ayuda a quien la necesite para obtener información sobre' + 
                ' la fluctuación de cuotas de los eventos deportivos. Aquí podeis encontrar tres funcionalidades básicas que esperemos que os sirvan de ayuda.'
      },
      {
        'title': 'Comparar cuotas',
        'desc': 'Texto a concretar en el que se hará una breve explicación de en que consiste exactamente esta funcionalidad.'
      }
    ]
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bt-community-view',
  templateUrl: './bt-community-view.component.html',
  styleUrls: ['./bt-community-view.component.scss']
})
export class BtCommunityViewComponent implements OnInit {

  constructor() { }
  data: any;
  ngOnInit() {
    this.data = [
      {
        'title': 'Comunidad',
        'desc': 'En este apartado, la comunidad ayuda a la verificación de pronósticos. Con dicha ayuda se pueden obtener ventajas y premios. ' +
        'A continuación, se muestra una serie de encuentros finalizados donde debes indicar el resultado correcto.'
      },
    ]
  }
}

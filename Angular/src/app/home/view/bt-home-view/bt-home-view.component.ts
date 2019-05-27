import { Component, OnInit } from '@angular/core';
import { BtDatabaseService } from 'src/app/core/services/bt-database/bt-database.service';

@Component({
  selector: 'bt-home-view',
  templateUrl: './bt-home-view.component.html',
  styleUrls: ['./bt-home-view.component.scss']
})
export class BtHomeViewComponent implements OnInit {

  constructor(private btDatabase: BtDatabaseService) { }
  data: any;
  ngOnInit() {
    this.setData();
    this.tryConnectDatabase();
  }

  tryConnectDatabase() {
    this.btDatabase.getAllLeagues().subscribe(data =>{
      console.log("Leagues", data)
    });
  }

  setData() {
    this.data = [
      {
        'title': 'Notificar cuota',
        'desc': 'Añade un aviso en tu evento preferido para detectar de forma automática cuándo una cuota ha alcanzado el valor seleccionado.'
      },
      {
        'title': 'Verificación',
        'desc': 'Introduce tu pronóstico y nuestro sistema verificará de forma automática si ha sido acertado o, por el contrario, errado.' + 
                ' Si el pronóstico se realiza sobre mercados desconocidos el pronóstico será introducido en la verficación por comunidad.'
      },
      {
        'title': '¿Quien somos?',
        'desc': 'Bet Tracking es un grupo de estudiantes de Ingeniería Informática que ha desarrollado un sistema novedoso y actualizado ' +
                'que permitirá a aquellas personas que quieran obtener benficios en apuestas deportivas, la información necesaria para ' +
                'tomar mejores decisiones. ¡Bienvenidos al mundo de los ganadores!'
      },
      {
        'title': 'Comunidad',
        'desc': 'Verifica un máximo de 10 pronósticos al día y entrarás en el sorteo de descuentos, y una gran diversidad de artículos.' +
                ' ¡Conviertete en el verificador del mes y obtendrás un regalo de forma automática! ¿A qué esperas?'
      },
      {
        'title': 'GRAFICO',
        'desc': 'En esta caja se debe introducir la gráfica ejemplo de un partido'
      }
    ];
  }
}

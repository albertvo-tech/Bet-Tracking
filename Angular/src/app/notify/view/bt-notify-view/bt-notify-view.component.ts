import { NotifyModule } from './../../notify.module';
import { Component, OnInit } from '@angular/core';
import { Notificacion } from './notificacion';

@Component({
  selector: 'bt-notify-view',
  templateUrl: './bt-notify-view.component.html',
  styleUrls: ['./bt-notify-view.component.scss']
})
export class BtNotifyViewComponent implements OnInit {

  constructor() { }
    show: boolean = true;
  data: any;
  ngOnInit() {
    this.data = [
      {
        'title': 'Notificar cuota',
        'desc': 'Añade un aviso en tu evento preferido para detectar de forma automática cuándo una cuota ha alcanzado el valor seleccionado.' +
                ' A continuación os mostramos un formulario donde se debe indicar el evento deseado.'
      },
      {
        'title': 'CREAR NOTIFICACIÓN',
        'desc': 'Introduce tu pronóstico y nuestro sistema verificará de forma automática si ha sido acertado o, por el contrario, errado.' +
                ' Si el pronóstico se realiza sobre mercados desconocidos el pronóstico será introducido en la verficación por comunidad.'
      },
      {
        'title': 'Escoge un deporte:',
        'desc': 'Bet Tracking es un grupo de estudiantes de Ingeniería Informática que ha desarrollado un sistema novedoso y actualizado ' +
                'que permitirá a aquellas personas que quieran obtener benficios en apuestas deportivas, la información necesaria para ' +
                'tomar mejores decisiones. ¡Bienvenidos al mundo de los ganadores!'
      },
      {
        'title': 'Escoge una liga:',
        'desc': 'Verifica un máximo de 10 pronósticos al día y entrarás en el sorteo de descuentos, y una gran diversidad de artículos.' +
                ' ¡Conviertete en el verificador del mes y obtendrás un regalo de forma automática! ¿A qué esperas?'
      },
      {
        'title': 'Escoge un partido/evento:',
        'desc': 'En esta caja se debe introducir la gráfica ejemplo de un partido'
      },
      {
        'title': 'Establece una cuota para recibir una alerta:',
        'desc': 'En esta caja se debe introducir la gráfica ejemplo de un partido'
      },
    ]
  }
  makeNotificaction(notification: Notificacion){
    //let notify: Notification = new Notification(notification.title, notification.options)
    if(notification){
      console.log(this.show);
      //notify.onclick = notification.onClick;
    }
}
}

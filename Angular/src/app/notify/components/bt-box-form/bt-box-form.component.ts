import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Notificacion } from './notificacion';
import { NotifierModule, NotifierService } from 'angular-notifier';
import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule( {
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
    NotifierModule.withConfig( {
      // Custom options in here
    } )
  ]
} )
@Component({
  selector: 'bt-box-form',
  templateUrl: './bt-box-form.component.html',
  styleUrls: ['./bt-box-form.component.scss']
})
export class BtBoxFormComponent implements OnInit {
  private readonly notifier: NotifierService;
  private toastr: ToastrService;
  toastrService: any;
  constructor() { }
  show: boolean = true;
  ngOnInit() {

  }

  tipoDeportes = ['Fútbol', 'Baloncesto', 'Tenis'];
  allDeportes = [
    {name: 'Liga española', type: 'Fútbol'},
    {name: 'Liga inglesa', type: 'Fútbol'},
    {name: 'NBA', type: 'Baloncesto'},
    {name: 'Liga Endesa', type: 'Baloncesto'},
    {name: 'Wimbledon', type: 'Tenis'},
    {name: 'Roland Garros', type: 'Tenis'}
  ];

  allLigas = [
    {name: 'Barcelona vs Real Madrid', type: 'Liga española'},
    {name: 'Atletico Madrid vs Espanyol', type: 'Liga española'},
    {name: 'Chelsea vs Arsenal', type: 'Liga inglesa'},
    {name: 'Watford vs Manchester City', type: 'Liga inglesa'},
    {name: 'Lakers vs Rockets', type: 'NBA'},
    {name: 'Celtics vs Warriors', type: 'NBA'}
  ];

  eventoEscogido = [];
  ligaEscogida = [];

  profileForm = new FormGroup({
    deporte: new FormControl(''),
    liga: new FormControl(''),
    evento: new FormControl(''),
    cuota: new FormControl('')
  });

  deporteEscogido(){
    const tipoEvento = this.profileForm.get('deporte').value;
    this.eventoEscogido = this.allDeportes.filter(p => p.type == tipoEvento);
  }

  partidoEscogido(){
    const partido = this.profileForm.get('liga').value;
    this.ligaEscogida = this.allLigas.filter(p => p.type == partido);
  }
  makeNotificaction(notifierService: NotifierService){
    console.log(this.profileForm.get('liga').value);
    console.log(this.profileForm.get('deporte').value);
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastrService.error('everything is broken', 'Major Error', {
      timeOut: 3000
    });
    this.notifier.show( {
      type: 'success',
      message: 'You are awesome! I mean it!',
      id: 'THAT_NOTIFICATION_ID' // Again, this is optional
    } );
     this.notifier.notify( 'success', 'You are awesome! I mean it!', 'THAT_NOTIFICATION_ID' );
    if(NotifierService){
      console.log("dentro");
      this.notifier.notify( 'success', 'You are awesome! I mean it!', 'THAT_NOTIFICATION_ID' );
    }

}

}


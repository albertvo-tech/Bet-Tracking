import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'bt-box-form',
  templateUrl: './bt-box-form.component.html',
  styleUrls: ['./bt-box-form.component.scss']
})
export class BtBoxFormComponent implements OnInit {

  constructor() { }

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


}



import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'bt-box-form',
  templateUrl: './bt-box-form.component.html',
  styleUrls: ['./bt-box-form.component.scss']
})
export class BtBoxFormComponent implements OnInit {

  constructor(public toastr: ToastrManager) {}
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
    return tipoEvento;
  }

  partidoEscogido(){
    const partido = this.profileForm.get('liga').value;
    this.ligaEscogida = this.allLigas.filter(p => p.type == partido);
    return partido;
  }

  partidoEvento(){
    const evento = this.profileForm.get('evento').value;
    this.ligaEscogida = this.allLigas.filter(p => p.type == evento);
    return evento;
  }

  cuotaEscogida(){
    const cuota = this.profileForm.get('cuota').value;
    return cuota;
  }

  fullName: string = `Notificación`;
  cuotaBD: number = 2.50;

  

  showSuccess() {
    const texto = this.partidoEscogido() + ', ' + this.partidoEvento() + ', ' + this.cuotaEscogida();
    this.toastr.successToastr(this.fullName);
    this.toastr.infoToastr(texto, 'Aviso cuota');
  }

  showNotification(){
    const deporte = this.deporteEscogido();
    const liga = this.partidoEscogido();
    const partido = this.partidoEvento();
    const cuota = this.cuotaEscogida();
    
    /*if(deporte == 'Fútbol' && liga == 'Liga española' && partido == 'Barcelona vs Real Madrid'){
      this.showSuccess();
    }*/
    if(deporte != '' && liga != '' && partido != '' && cuota != '' && cuota > this.cuotaBD){
      this.showSuccess();
    }
  }
  
  

}

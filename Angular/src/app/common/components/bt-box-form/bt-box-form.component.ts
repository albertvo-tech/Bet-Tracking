import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'bt-box-form',
  templateUrl: './bt-box-form.component.html',
  styleUrls: ['./bt-box-form.component.scss']
})
export class BtBoxFormComponent implements OnInit {

  @Input() notifyType;
  @Input() verifyType;
  constructor(public toastr: ToastrManager) {}
    show: boolean = true;

  ngOnInit() {
  }

  tipoDeportes = ['Fútbol', 'Baloncesto', 'Tenis'];
  allDeportes = [
    {name: 'Liga española', type: 'Fútbol'},
    {name: 'Liga inglesa', type: 'Fútbol'},
    {name: 'Copa del Rey', type: 'Fútbol'},
    {name: 'NBA', type: 'Baloncesto'},
    {name: 'Liga Endesa', type: 'Baloncesto'},
    {name: 'Wimbledon', type: 'Tenis'},
    {name: 'Roland Garros', type: 'Tenis'}
  ];

  allLigas = [
    {name: 'FC Barcelona vs Valencia', type: 'Copa del Rey'},
    {name: 'Barcelona vs Real Madrid', type: 'Liga española'},
    {name: 'Atletico Madrid vs Espanyol', type: 'Liga española'},
    {name: 'Chelsea vs Arsenal', type: 'Liga inglesa'},
    {name: 'Watford vs Manchester City', type: 'Liga inglesa'},
    {name: 'Toronto vs Milwaukee', type: 'NBA'}
  ];

  allMercados = [
    {name: 'Barcelona Ganador', type: 'FC Barcelona vs Valencia'},
    {name: 'Empate', type: 'FC Barcelona vs Valencia'},
    {name: 'Valencia Ganador', type: 'FC Barcelona vs Valencia'}
  ]

  eventoEscogido = [];
  ligaEscogida = [];
  mercadoEscogido = [];

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

  mercadoSelected(){
    const evento = this.profileForm.get('cuota').value;
    this.mercadoEscogido = this.mercadoEscogido.filter(p => p.type == evento);
    return evento;
  }

  fullName: string = `Notificación`;
  cuotaBD: string = 'Valencia Ganador';

  

  showSuccess() {
    let evento = this.mercadoSelected();
    let resultado = 'Pronóstico FALLADO';
    if(evento == this.cuotaBD) {
      resultado = 'Pronóstico ACERTADO'
    }
    const texto = this.partidoEscogido() + ', ' + this.partidoEvento() + ', ' + resultado;
    this.toastr.successToastr(this.fullName);
    this.toastr.infoToastr(texto, 'Verificación completada');
  }

  showNotification(){
    const deporte = this.deporteEscogido();
    const liga = this.partidoEscogido();
    const partido = this.partidoEvento();
    const mercado = this.mercadoSelected();
    
    /*if(deporte == 'Fútbol' && liga == 'Liga española' && partido == 'Barcelona vs Real Madrid'){
      this.showSuccess();
    }*/
    if(deporte != '' && liga != '' && partido != '' && mercado != ''){
      this.showSuccess();
    }
  }
  
  

}

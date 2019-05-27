import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BtDatabaseService } from 'src/app/core/services/bt-database/bt-database.service';

@Component({
  selector: 'bt-match-view',
  templateUrl: './bt-match-view.component.html',
  styleUrls: ['./bt-match-view.component.scss']
})
export class BtMatchViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private btDatabase: BtDatabaseService) { }
  data: any;
  dataChart: any;
  sportID: any;
  leagueID: any;
  matchID: any;
  mercado = '1';
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
        'title': 'Ganador Local',
      },
      {
        'title': 'Empate',
      },
      {
        'title': 'Ganador Visitante',
      }
    ];

    this.route.queryParams.subscribe(params => {
      this.sportID = params["sportID"];
      this.leagueID = params["leagueID"];
      this.matchID = params["matchID"];
      this.getDataForChart('');
    });
  }

  getDataForChart(event) {
    this.dataChart = this.btDatabase.getOdds(this.sportID, this.leagueID, this.matchID, event); 
    this.setDataStats(event)
  }

  setDataStats(event) {
    console.log("EVENT: ", event)
    this.data[0].desc = this.btDatabase.getMax(this.sportID, this.leagueID, this.matchID, event);
    this.data[1].desc = this.btDatabase.getMin(this.sportID, this.leagueID, this.matchID, event);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtDatabaseService {

  leaguesURL = "http://localhost:3000/routes";
  myData1 = [
    ['00:00', 1.1],
    ['04:44', 1.025],
    ['10:16', 1.03],
    ['20_16', 1.03],
    ['23:16', 1.03],
    ['24:16', 1.008],
    ['24:16', 1.008],
    ['26:16', 1.008],
    ['27:16', 1.008],
    ['28:16', 1.008],
    ['29:17', 1.008],
    ['30:17', 1.008],
    ['31:17', 1.008],
    ['32:17', 1.008],
    ['33:17', 1.008],
    ['34:18', 1.008],
    ['35:18', 1.008],
    ['36:18', 1.008],
    ['37:19', 1.008],
    ['38:19', 1.008],
    ['39:19', 1.008],
    ['40:18', 1.008],
    ['41:18', 1.008],
    ['42:18', 1.008],
    ['43:18', 1.008],
    ['44:19', 1.008],
    ['45:19', 1.008],
    ['45:00', 1.008],
    ['45:12', 1.008],
    ['46:11', 1.008],
    ['47:13', 1.008],
    ['48:13', 1.008],
    ['49:13', 1.008],
    ['50:14', 1.008],
    ['51:15', 1.008],
    ['52:15', 1.008],
    ['53:16', 1.008],
    ['54:17', 1.006],
    ['55:18', 1.006],
    ['56:18', 1.25],
    ['57:20', 1.25],
    ['58:21', 1.25],
    ['59:22', 1.28],
    ['60:24', 1.3],
    ['61:25', 1.33],
    ['62:26', 1.33],
    ['63:26', 1.33],
    ['64:26', 1.4],
    ['65:28', 1.44],
    ['66:28', 1.44]
  ];
  myDataX = [
    ['00:00', 13],
    ['04:44', 26],
    ['10:16', 26],
    ['20_16', 26],
    ['23:16', 26],
    ['24:16', 34],
    ['24:16', 34],
    ['26:16', 34],
    ['27:16', 34],
    ['28:16', 34],
    ['29:17', 34],
    ['30:17', 34],
    ['31:17', 34],
    ['32:17', 34],
    ['33:17', 34],
    ['34:18', 34],
    ['35:18', 34],
    ['36:18', 34],
    ['37:19', 34],
    ['38:19', 34],
    ['39:19', 34],
    ['40:18', 34],
    ['41:18', 34],
    ['42:18', 34],
    ['43:18', 34],
    ['44:19', 34],
    ['45:19', 34],
    ['45:00', 34],
    ['45:12', 34],
    ['46:11', 34],
    ['47:13', 34],
    ['48:13', 34],
    ['49:13', 34],
    ['50:14', 34],
    ['51:15', 34],
    ['52:15', 34],
    ['53:16', 34],
    ['54:17', 41],
    ['55:18', 41],
    ['56:18', 6.5],
    ['57:20', 6.5],
    ['58:21', 6.5],
    ['59:22', 6.5],
    ['60:24', 6.5],
    ['61:25', 7],
    ['62:26', 7],
    ['63:26', 7],
    ['64:26', 2.1],
    ['65:28', 7.5],
    ['66:28', 7.5]
  ];
  myData2 = [
    ['00:00', 8],
    ['04:44', 17],
    ['10:16', 15],
    ['20_16', 15],
    ['23:16', 15],
    ['24:16', 26],
    ['24:16', 26],
    ['26:16', 26],
    ['27:16', 26],
    ['28:16', 26],
    ['29:17', 26],
    ['30:17', 26],
    ['31:17', 26],
    ['32:17', 26],
    ['33:17', 26],
    ['34:18', 26],
    ['35:18', 26],
    ['36:18', 26],
    ['37:19', 26],
    ['38:19', 26],
    ['39:19', 26],
    ['40:18', 26],
    ['41:18', 26],
    ['42:18', 26],
    ['43:18', 26],
    ['44:19', 26],
    ['45:19', 26],
    ['45:00', 26],
    ['45:12', 26],
    ['46:11', 26],
    ['47:13', 26],
    ['48:13', 26],
    ['49:13', 26],
    ['50:14', 26],
    ['51:15', 26],
    ['52:15', 26],
    ['53:16', 26],
    ['54:17', 29],
    ['55:18', 29],
    ['56:18', 6.5],
    ['57:20', 6.5],
    ['58:21', 6],
    ['59:22', 5.5],
    ['60:24', 5],
    ['61:25', 4.33],
    ['62:26', 4.33],
    ['63:26', 4.33],
    ['64:26', 1.66],
    ['65:28', 3.75],
    ['66:28', 3.5]
  ];

  constructor(private http: HttpClient) { }

  getAllLeagues(): Observable<any> {
    return this.http.get(this.leaguesURL + "/get-leagues")
  }

  getLeaguesBySport(idSport): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(this.leaguesURL + "/get-leagues-by-sport", idSport, httpOptions)
  }

  getAllSports(): Observable<any> {
    return this.http.get(this.leaguesURL + "/get-sports")
  }

  getSportsById(idSport): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(this.leaguesURL + "/get-sports-by-id", idSport, httpOptions)
  }

  /*getOdds(sport, league, match) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('sportID', sport);
    params = params.append('leagueID', league);
    params = params.append('matchID', match);

    return this.http.get(this.leaguesURL + "/get-odds?sportID="+sport+"&leagueID="+league+"&matchID="+match)
  }*/

  getOdds(sport, league, match, mercado) {
    switch(mercado) {
      case '1':
        return this.myData1
      case 'X':
        return this.myDataX
      case '2':
        return this.myData2
      default:
        return this.myData1
    }
  }

  getMin(sportID, leagueID, matchID, mercado) {
    switch(mercado) {
      case '1':
        return '1.008'
      case 'X':
        return '2.1'
      case '2':
        return '29'
      default:
        return '1.008'
    }
  }

  getMax(sportID, leagueID, matchID, mercado) {
    switch(mercado) {
      case '1':
        return '1.44'
      case 'X':
        return '41'
      case '2':
        return '1.66'
      default:
        return '1.44'
    }
  }
}

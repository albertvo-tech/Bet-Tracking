import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtDatabaseService {

  leaguesURL = "http://localhost:3000/routes";

  constructor(private http: HttpClient) { }

  getAllLeagues(): Observable<any> {
    return this.http.get(this.leaguesURL + "/get-leagues")
  }

  getLeaguesBySport(idSport): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
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
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.http.post(this.leaguesURL + "/get-sports-by-id", idSport, httpOptions)
  }
}

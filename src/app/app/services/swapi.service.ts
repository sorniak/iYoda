import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { starshipsEndPoint, peopleEndPoint } from '../shared/consts';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(peopleEndPoint)
    .pipe(
      map(data => {
        return data['results'];
      })
    );
  }

  getStarships(): Observable<any[]> {
    return this.http.get<any[]>(starshipsEndPoint)
    .pipe(
      map(data => {
        return data['results'];
      })
    );
  }

}

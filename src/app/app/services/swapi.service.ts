import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { reduce, expand, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPagesFromEndPoint(endpoint: string) { //add timeout?
    return this.http.get(endpoint).pipe(
      expand(
        (res) => {
        const keyNext = 'next';
        return res[keyNext] ? this.http.get(res[keyNext]) : EMPTY; }),
        reduce((acc, res) => {
          const keyResult = 'results';
          return acc.concat(res[keyResult]); }, []
        )
    );
  }

}

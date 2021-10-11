import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cow } from '../models/Cow';

@Injectable({
  providedIn: 'root'
})
export class CowsService {
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getCows(): Observable<Cow[]> {
    return this.http.get<Cow[]>(this.url + '/cows')
  }

  deleteCow(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/cows' + '/' + id)
  }
}

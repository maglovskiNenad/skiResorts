import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Reservation } from '../model/reservation.model';
import { ResortInfo } from '../model/resort-info.model';
import { Resort } from '../model/resort.modle';
import { SkiPass } from '../model/skipass.model';
import { Track } from '../model/track.model';

const baseURL = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class ResortService {

  constructor(private http: HttpClient) { }

  getResortsInfo(): Observable<ResortInfo[]> {
    return this.http.get(baseURL).pipe(map((data: any) => {
      return data && data.map((elem: any) => new ResortInfo(elem)) || [];
    }))
  }

  getResort(resortId: number): Observable<Resort> {
    return this.http.get(`${baseURL}/${resortId}`).pipe(map((data: any) => {
      return new Resort(data);
    }))
  }

  getTracks(resortId: number, params?: any): Observable<Track[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set("sort", params.sort)
          .set("sortDirection", "desc")
      }
    }

    return this.http.get(`${baseURL}/${resortId}/tracks`, options).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Track(elem));
    }))
  }

  getSkiPass(resortId: number): Observable<SkiPass[]> {
    return this.http.get(`${baseURL}/${resortId}/skipass`).pipe(map((data: any) => {
      return data && data.map((elem: any) => new SkiPass(elem));
    }))
  }

  postRequest(resortId: number, reservation: Reservation): Observable<any> {
    return this.http.post(`${baseURL}/${resortId}/skipass`, reservation).pipe(map((data: any) => {
      return new Reservation(data);
    }))
  }
}

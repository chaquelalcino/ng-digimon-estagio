import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { DigimonComponent } from './digimon/digimon.component';
import { Digimon } from './models/digimon';
import { DIGIMONS } from './models/mock-digimons';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) { }

  getDigimonsByName(name: string): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(`https://digimon-api.vercel.app/api/digimon/name/${name}`).pipe(
      catchError(this.handleError<Digimon[]>('getDigimons', []))
    );
  }

  getDigimonsByLevel(level: string): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(`https://digimon-api.vercel.app/api/digimon/level/${level}`).pipe(
      catchError(this.handleError<Digimon[]>('getDigimons', []))
    );
  }

  getDigimons(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>('https://digimon-api.vercel.app/api/digimon').pipe(
      catchError(this.handleError<Digimon[]>('getDigimons', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
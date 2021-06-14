import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  private url: string = 'http://localhost:5000/rent/get';
  constructor(private httpClient: HttpClient) { }
  
  public getHistory(): Observable<Rent[]>{
    return this.httpClient.get<Rent[]>(this.url);
  }
}



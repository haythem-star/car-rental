import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from "../shared/rental.model";

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  private url: string = 'http://localhost:5000/rent/get';
  constructor(private httpClient: HttpClient) { }
  
  public getHistory(): Observable<Rental[]>{
    return this.httpClient.get<Rental[]>(this.url);
  }
}



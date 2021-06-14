import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserInformationService {
  private url: string = 'http://localhost:5000/api/user/current';
  constructor(private httpClient: HttpClient) { }
  
  public getInformation(): Observable<User>{
    return this.httpClient.get<User>(this.url);
  }
}
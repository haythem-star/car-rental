import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {User} from "../shared/user.model" ;
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModifyUsernameService {

  constructor(private httpClient: HttpClient) { }


  
    setuser(username :String){
     return this.httpClient
     .put(
       "http://localhost:5000/api/user/updateUser", username,
       {headers : new HttpHeaders().append('Content-Type','application/json')}
     ).pipe(tap(response => {console.log(response)}))
    }
  
     }


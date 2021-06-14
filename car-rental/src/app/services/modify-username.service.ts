import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {User} from "../shared/user.model" ;

@Injectable({
  providedIn: 'root'
})
export class ModifyUsernameService {

  constructor(private httpClient: HttpClient) { }


  
    setuser(username :String){
      this.httpClient
     .put(
       "http://localhost:5000/api/user/updatepassword", username,
       {headers : new HttpHeaders().append('Content-Type','application/json')}
     ).subscribe(response =>{console.log(response)})
  
    }

}   

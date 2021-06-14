import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {User} from "../shared/user.model" ;

@Injectable({
  providedIn: 'root'
})
export class ModifyUsernameService {

  constructor(private httpClient: HttpClient) { }



}

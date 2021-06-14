import { Injectable } from '@angular/core';
import { Car } from '../shared/Car.model';
import {Rental } from '../shared/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalServiceService {
  rent : Rental;
  sessionId : string;

  getRent(){
    return this.rent;
  }

  setRent(car : Car,start_rental : Date,end_rental : Date,durations : number,price : number)
  {
    this.rent = new Rental(car,start_rental,end_rental,durations,price)
  }
  get(){
    return {...this.rent,sessionId : this.sessionId}
  }
  setSession(sessionId : string)
  {
    this.sessionId = sessionId;
  }
  constructor() { }
}

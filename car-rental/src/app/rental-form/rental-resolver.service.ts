import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs';
import { RentalServiceService } from '../services/rental-service.service';
import { Car } from '../shared/Car.model';
import {Rental} from '../shared/rental.model';

class RentalSession {

        public car : Car
        public start_rental : Date
        public end_rental : Date
        public durations : number
        public prise : number
        public sessionId : string

}


@Injectable()
export class RentalResolver implements Resolve<Rental> {
    constructor(private rentService : RentalServiceService){}
    resolve(route : ActivatedRouteSnapshot, state :RouterStateSnapshot ) : Observable<RentalSession> | Promise<RentalSession> | RentalSession {
        return this.rentService.get();
    }

}
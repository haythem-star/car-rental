import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/shared/Car.model';

import {CarsService} from '../../shared/cars.service'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  subsc : Subscription;
  carsTable : Car[] = [];

  constructor(private carsService : CarsService) { }

  ngOnInit(): void {
   this.carsTable= this.carsService.getCars();
   this.subsc=this.carsService.carsChanged.subscribe(
     (cars : Car[]) => 
     {
       this.carsTable=cars;
     }
   );
  }


  ngOnDestroy()
  {
    this.subsc.unsubscribe();

  }

}

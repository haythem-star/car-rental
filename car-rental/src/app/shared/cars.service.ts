import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged = new Subject<Car[]>();

  Cars : Car[] = [];

  getCars()
  {
    return this.Cars.slice();
  }

  addCar(car : Car)
  {
    this.Cars.push(car);
    this.carsChanged.next(this.Cars.slice());
  }

  setCars(cars : Car[])
  {
    this.Cars = cars;
    this.carsChanged.next(this.Cars.slice());
  }

  constructor() { }
}

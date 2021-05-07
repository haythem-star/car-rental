import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged = new Subject<Car[]>();

  Cars : Car[] = [new Car(
    'Bmw i8',
    '167',
    'https://i.ytimg.com/vi/fjsy309KJ1Q/maxresdefault.jpg',
    'the new model of bmw 2020',
    'BMW',
    'Sxit',
    'Automatic',
    300,
    4,
    'Tunis , Center Urbain',
    520
  )];

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

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged = new Subject<Car[]>();

  Cars : Car[] = [];
  carsfilter : Car[]= [];

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

  setFilterMark(mark : string)
  {
    const carsMarkFilter = this.Cars.filter(car => car.mark == mark);
    this.carsfilter=this.carsfilter.concat(carsMarkFilter);
    this.carsChanged.next(this.carsfilter.slice());
    
  }

  deleteFilterMark(mark : string)
  {
    if(this.carsfilter.length == 0)
    {
      this.carsfilter =this.Cars;
    }
    this.carsfilter=this.carsfilter.filter(car => car.mark !== mark);
    this.carsChanged.next(this.carsfilter.slice());
  }

  constructor() { }
}

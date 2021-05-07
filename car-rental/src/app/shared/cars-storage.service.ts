import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {CarsService} from './cars.service';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsStorageService {

  constructor(private http : HttpClient,
              private carsService : CarsService) { }

  storeCars()
  {
    const carsTable = this.carsService.getCars();
    this.http.put('https://cars-rental-2483d-default-rtdb.firebaseio.com/cars.json',carsTable)
    .subscribe(response => 
      {
        console.log(response);
      });

  }

  fetchCars()
  {
    this.http.get<Car[]>('https://cars-rental-2483d-default-rtdb.firebaseio.com/cars.json')
    .pipe(map(cars => 
      {
        return cars.map(car => 
          {
            return {...car,booking : car.booking ? car.booking : []};
          })
      }))
    .subscribe(cars =>
      {
        this.carsService.setCars(cars);
      })

  }
}

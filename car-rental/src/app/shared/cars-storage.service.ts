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

  storeCar(car : Car)
  {
    this.http.post('https://localhost:5000/car',car)
    .subscribe(response => 
      {
        console.log(response);
      });

  }

  fetchCars()
  {
    this.http.get('https://localhost:5000/car')
    .pipe(map(cars => 
      {
        const carsTable = Object.values(cars);
        return carsTable.map(car => 
          {
            const updatecar = {...car,booking : car.booking ? car.booking : []}
            if (!car.likes.clients)
            {
              updatecar.likes={...car.likes,clients : []};
            }
            return updatecar;
          })
      }))
    .subscribe(cars =>
      {
        this.carsService.setCars(cars);
      })

  }
}

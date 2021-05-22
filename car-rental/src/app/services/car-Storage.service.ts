
import {Injectable} from "@angular/core"
import {carService} from "./car.service"
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Car } from "../shared/Car.model";

@Injectable({
    providedIn: 'root' 
})
export class carStorage {
    constructor(private carService : carService , private http : HttpClient){}


    storeCars() {
        const cars = this.carService.getCars();
        this.http
          .put(
            'https://ng-course-recipe-book-65f10.firebaseio.com/cars.json',
            cars
          )
          .subscribe(response => {
            console.log(response);
          });
      }
    
      fetchRecipes() {
        return this.http
          .get<Car[]>(
            'https://ng-course-recipe-book-65f10.firebaseio.com/cars.json'
          )
          .pipe(
            map(cars => {
              return cars.map(car => {
                return {
                  ...car
                
                };
              });
            }),
            tap(cars => {
              this.carService.setCars(cars);
            })
          )
      }




}
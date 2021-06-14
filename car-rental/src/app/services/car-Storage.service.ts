
import {Injectable} from "@angular/core"
import {carService} from "./car.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
          .post(
            'http://localhost:5000/car',
            cars,
            {headers : new HttpHeaders().append('Content-Type','application/json')}
          )
          .subscribe(response => {
            console.log(response);
          });
      }
    
      fetchRecipes() {
        return this.http
          .get<Car[]>(
            'http://localhost:5000/car',
            {headers : new HttpHeaders().append('Content-Type','application/json')}
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
        setCar(car :Car){
           this.http
          .post(
            "http://localhost:5000/car/addCar", car,
            {headers : new HttpHeaders().append('Content-Type','application/json')}
          ).subscribe(response =>{console.log(response)})

        }



}
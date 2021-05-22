import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Car} from "../shared/Car.model"


@Injectable( { providedIn: 'root' })
export class carService {
      cars : Car[] = [
        {mark:'Citroën',model :'Nemo ',location :'Tunis/centre ville',seats:4,speed:120 ,gearbox:'OIl Mills',imgPath:"assets/img/citron.jpg",price: 900},
        {mark:'Bmw',model :'e92 316i KIT M',location :'Sousse/sahloul',seats:4,speed:200 ,gearbox:'Paper Mills',imgPath:"assets/img/bmw.jpg",price: 2500},
        {mark:'Passat',model :'b8 tdi',location :'Monastir',seats:4,speed:140 ,gearbox:'OIl Mills',imgPath:"assets/img/passat.jpg",price: 500},
        {mark:'Peugeot',model :'301',location :'Tunis/Barcelona',seats:4,speed:130 ,gearbox:'OIl Mills',imgPath:"assets/img/peugeot.jpg",price: 2000}] ;
    

        carsChanged = new Subject<Car[]>();

        getCars() {
            return this.cars.slice();
          }
        
          getCar(index: number) {
            return this.cars[index];
          }

          setCars(cars: Car[]) {
            this.cars = cars;
            this.carsChanged.next(this.cars.slice());
          }
          addCar(car: Car) {
            this.cars.push(car);
            this.carsChanged.next(this.cars.slice());
          }
        
          updateCar(index: number, newCar: Car) {
            this.cars[index] = newCar;
            this.carsChanged.next(this.cars.slice());
          }
        
          deleteCar(index: number) {
            this.cars.splice(index, 1);
            this.carsChanged.next(this.cars.slice());
          }


}
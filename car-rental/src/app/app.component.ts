import { Component, OnInit } from '@angular/core';
import {CarsStorageService} from './shared/cars-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-rental';
  constructor(private carsStorage: CarsStorageService){}

  ngOnInit()
  {
    this.carsStorage.fetchCars();

  }

  
}

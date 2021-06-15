import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { carStorage } from './services/car-Storage.service';
import {CarsStorageService} from './shared/cars-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-rental';
  constructor(private carStorage : carStorage, private authService : AuthService){}

  ngOnInit()
  {
   
    this.carStorage.fetchCars();
  

  }

  
}


import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';



import {Car} from '../shared/Car.model';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {carService} from "../services/car.service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  "../../assets/css/lightbox.css"
  ]
})
export class HomeComponent implements OnInit {

 cars :Car[];
  marques= [];
 subscription: Subscription;




  constructor(private dialog: MatDialog  ,public carService :carService , public router : Router ) {
    
   }

  ngOnInit(): void {
    this.subscription = this.carService.carsChanged
    .subscribe(
      (cars: Car[]) => {
        this.cars = cars;
      }
    );
  this.cars = this.carService.getCars();
  this.marques=this.carService.getMarques();
  
  }



  login(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '700px',
      height: '550px'
    });

   
  }

  navBrands(){

    this.router.navigate(['/categories']);
  }

}

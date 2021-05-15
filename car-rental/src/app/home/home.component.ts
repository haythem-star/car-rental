import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Car} from '../shared/Car.model';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  OccasionCar : Car[] = [
    {mark:'Citroën',model :'Nemo ',location :'Tunis/centre ville',seats:4,speed:120 ,gearbox:'OIl Mills',imgPath:"assets/img/citron.jpg",price: 900},
    {mark:'Bmw',model :'e92 316i KIT M',location :'Sousse/sahloul',seats:4,speed:200 ,gearbox:'Paper Mills',imgPath:"assets/img/bmw.jpg",price: 2500},
    {mark:'Passat',model :'b8 tdi',location :'Monastir',seats:4,speed:140 ,gearbox:'OIl Mills',imgPath:"assets/img/passat.jpg",price: 500},
    {mark:'Peugeot',model :'301',location :'Tunis/Barcelona',seats:4,speed:130 ,gearbox:'OIl Mills',imgPath:"assets/img/peugeot.jpg",price: 2000}] ;



marque =[{name :'alfa-romeo',webp:'https://catalogue.automobile.tn/marques/1.webp?t=2', png :'https://catalogue.automobile.tn/marques/1.png?t=2'},
{name :'audi',webp:'https://catalogue.automobile.tn/marques/2.webp?t=2', png :'https://catalogue.automobile.tn/marques/2.png?t=2'},
{name :'bmw',webp:'https://catalogue.automobile.tn/marques/3.webp?t=2', png :'https://catalogue.automobile.tn/marques/3.png?t=2'},
{name :'changan',webp:'https://catalogue.automobile.tn/marques/1655.webp?t=2', png :'https://catalogue.automobile.tn/marques/1655.png?t=2'},
{name :'chery',webp:'https://catalogue.automobile.tn/marques/1544.webp?t=2', png :'https://catalogue.automobile.tn/marques/1544.png?t=2'},
{name :'dfsk',webp:'https://catalogue.automobile.tn/marques/1602.webp?t=2', png :'https://catalogue.automobile.tn/marques/1602.png?t=2'},
{name :'dongfeng',webp:'https://catalogue.automobile.tn/marques/1640.webp?t=2', png :'https://catalogue.automobile.tn/marques/1640.png?t=2'},
{name :'fiat',webp:'https://catalogue.automobile.tn/marques/88.webp?t=2', png :'https://catalogue.automobile.tn/marques/88.png?t=2'},
{name :'ford',webp:'https://catalogue.automobile.tn/marques/6.webp?t=2', png :'https://catalogue.automobile.tn/marques/6.png?t=2'},
{name :'foton',webp:'https://catalogue.automobile.tn/marques/1644.webp?t=2', png :'https://catalogue.automobile.tn/marques/1644.png?t=2'},
{name :'geely',webp:'https://catalogue.automobile.tn/marques/1615.webp?t=2', png :'https://catalogue.automobile.tn/marques/1615.png?t=2'},
{name :'great-wall',webp:'https://catalogue.automobile.tn/marques/1549.webp?t=2', png :'https://catalogue.automobile.tn/marques/1549.png?t=2'},
{name :'haval',webp:'https://catalogue.automobile.tn/marques/1550.webp?t=2', png :'https://catalogue.automobile.tn/marques/1550.png?t=2'},
{name :'honda',webp:'https://catalogue.automobile.tn/marques/188.webp?t=2', png :'https://catalogue.automobile.tn/marques/188.png?t=2'},
{name :'hyundai',webp:'https://catalogue.automobile.tn/marques/216.webp?t=2', png :'https://catalogue.automobile.tn/marques/216.png?t=2'},
{name :'jaguar',webp:'https://catalogue.automobile.tn/marques/144.webp?t=2', png :'https://catalogue.automobile.tn/marques/144.png?t=2'},
{name :'jeep',webp:'https://catalogue.automobile.tn/marques/690.webp?t=2', png :'https://catalogue.automobile.tn/marques/690.png?t=2'},
{name :'kia',webp:'https://catalogue.automobile.tn/marques/7.webp?t=2', png :'https://catalogue.automobile.tn/marques/7.png?t=2'},
{name :'land-rover',webp:'https://catalogue.automobile.tn/marques/137.webp?t=2', png :'https://catalogue.automobile.tn/marques/137.png?t=2'},
{name :'mahindra',webp:'https://catalogue.automobile.tn/marques/1497.webp?t=2', png :'https://catalogue.automobile.tn/marques/1497.png?t=2'},
{name :'mazda',webp:'https://catalogue.automobile.tn/marques/8.webp?t=2', png :'https://catalogue.automobile.tn/marques/8.png?t=2'},
{name :'mercedes-benz',webp:'https://catalogue.automobile.tn/marques/9.webp?t=2', png :'https://catalogue.automobile.tn/marques/9.png?t=2'},
{name :'mg',webp:'https://catalogue.automobile.tn/marques/904.webp?t=2', png :'https://catalogue.automobile.tn/marques/904.png?t=2'},
{name :'mini',webp:'https://catalogue.automobile.tn/marques/198.webp?t=2', png :'https://catalogue.automobile.tn/marques/198.png?t=2'},
{name :'mitsubishi',webp:'https://catalogue.automobile.tn/marques/1504.webp?t=2', png :'https://catalogue.automobile.tn/marques/1504.png?t=2'},
{name :'peugeot',webp:'https://catalogue.automobile.tn/marques/12.webp?t=2', png :'https://catalogue.automobile.tn/marques/12.png?t=2'},
{name :'porsche',webp:'https://catalogue.automobile.tn/marques/125.webp?t=2', png :'https://catalogue.automobile.tn/marques/125.png?t=2'},
{name :'seat',webp:'https://catalogue.automobile.tn/marques/14.webp?t=2', png :'https://catalogue.automobile.tn/marques/14.png?t=2'},
{name :'skoda',webp:'https://catalogue.automobile.tn/marques/1209.webp?t=2', png :'https://catalogue.automobile.tn/marques/1209.png?t=2'},
{name :'ssangyong',webp:'https://catalogue.automobile.tn/marques/221.webp?t=2', png :'https://catalogue.automobile.tn/marques/221.png?t=2'},
{name :'suzuki',webp:'https://catalogue.automobile.tn/marques/1246.webp?t=2', png :'https://catalogue.automobile.tn/marques/1246.png?t=2'},
{name :'tata',webp:'https://catalogue.automobile.tn/marques/1268.webp?t=2', png :'https://catalogue.automobile.tn/marques/1268.png?t=2'},
{name :'toyota',webp:'https://catalogue.automobile.tn/marques/207.webp?t=2', png :'https://catalogue.automobile.tn/marques/207.png?t=2'},
{name :'volkswagen',webp:'https://catalogue.automobile.tn/marques/15.webp?t=2', png :'https://catalogue.automobile.tn/marques/15.png?t=2'},
{name :'wallyscar',webp:'https://catalogue.automobile.tn/marques/1476.webp?t=2', png :'https://catalogue.automobile.tn/marques/1476.png?t=2'}
]


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '700px',
      height: '550px'
    });
  }

  

}

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
  markFilter : string[] = [];
  mark : boolean = false;
  available : boolean = false;
  price : boolean = false;
  gearbox : boolean = false;
  seats : boolean = false;
  availableFilter : string ;
  priceFilter : string;
  gearboxFilter : string;
  seatsFilter : string;

  marques =[{name :'alfa-romeo',imgpath:'assets/img/categories/alfaromeo.png'},
  {name :'audi',imgpath:'assets/img/categories/audi.png'},
  {name :'bmw',imgpath:'assets/img/categories/bmw.png'},
  {name :'changan',imgpath:'assets/img/categories/changan.png'},
  {name :'chery',imgpath:'assets/img/categories/chery.png'},
  {name :'dfsk',imgpath:'assets/img/categories/dfsk.png'},
  {name :'dongfeng',imgpath:'assets/img/categories/dongfeng.png'},
  {name :'fiat',imgpath:'assets/img/categories/fiat.png'},
  {name :'ford',imgpath:'assets/img/categories/ford.png'},
  {name :'foton',imgpath:'assets/img/categories/foton.png'},
  {name :'geely',imgpath:'assets/img/categories/geely.png'},
  {name :'great-wall',imgpath:'assets/img/categories/reat-wall.png'},
  {name :'haval',imgpath:'assets/img/categories/haval.png'},
  {name :'honda',imgpath:'assets/img/categories/honda.png'},
  {name :'hyundai',imgpath:'assets/img/categories/hyundai.png'},
  {name :'jaguar',imgpath:'assets/img/categories/jaguar.png'},
  {name :'jeep',imgpath:'assets/img/categories/jeep.png'},
  {name :'kia',imgpath:'assets/img/categories/kia.png'},
  {name :'land-rover',imgpath:'assets/img/categories/landlover.png'},
  {name :'mahindra',imgpath:'assets/img/categories/maindra.png'},
  {name :'mazda',imgpath:'assets/img/categories/mazda.png'},
  {name :'mercedes-benz',imgpath:'assets/img/categories/mercedes-benz.png'},
  {name :'mg',imgpath:'assets/img/categories/mg.png'},
  {name :'mini',imgpath:'assets/img/categories/mini.png'},
  {name :'mitsubishi',imgpath:'assets/img/categories/mitsubishi.png'},
  {name :'peugeot',imgpath:'assets/img/categories/peugeot.png'},
  {name :'porsche',imgpath:'assets/img/categories/porshe.png'},
  {name :'seat',imgpath:'assets/img/categories/seat.png'},
  {name :'skoda',imgpath:'assets/img/categories/skoda.png'},
  {name :'ssangyong',imgpath:'assets/img/categories/ssangyong.png'},
  {name :'suzuki',imgpath:'assets/img/categories/suzuki.png'},
  {name :'tata',imgpath:'assets/img/categories/tata.png'},
  {name :'toyota',imgpath:'assets/img/categories/toyota.png'},
  {name :'volkswagen',imgpath:'assets/img/categories/volkswagen.png'},
  {name :'wallyscar',imgpath:'assets/img/categories/wallyscar.png'}
  ];

  getMarques(){
    return this.marques;
  }

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

  addMarkToFilter(mark : string){

  }

  constructor() { }
}

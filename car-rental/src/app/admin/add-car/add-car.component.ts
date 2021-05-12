import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/shared/Car.model';
import { CarsService } from 'src/app/shared/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  newCarForm : FormGroup;

  carMarks : string[] = ['BMW', 'Tesla','Ford','Honda','Toyota'];
  rentalSocieties : string[] = ['EuropCar','Sixt','Dallar','Centquro','WindyCar'];
  gearbox: string[] = ['Manual','Automatic'];
  seats : string[] = ['2 seats','4 seats'];

  constructor(private carsService : CarsService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit()
  {
    this.newCarForm = new FormGroup ({
      'model' : new FormControl(null,[Validators.required]),
      'registration' : new FormControl(null,[Validators.required]),
      'imgPath' : new FormControl(null,[Validators.required]),
      'description' : new FormControl(null),
      'mark' : new FormControl(null,[Validators.required]),
      'society' : new FormControl(null,[Validators.required]),
      'box' : new FormControl(null,[Validators.required]),
      'speed' : new FormControl(null),
      'seat' : new FormControl(null,[Validators.required]),
      'location' : new FormControl(null,[Validators.required]),
      'price' : new FormControl(null,[Validators.required])


    })

  }

  onSubmit()
  {
    const model = this.newCarForm.value['model'];
    const registration = this.newCarForm.value['registraion'];
    const imgPath = this.newCarForm.value['imgPath'];
    const description = this.newCarForm.value['description']
    const mark = this.newCarForm.value['mark'];
    const society = this.newCarForm.value['society'];
    const gearbox = this.newCarForm.value['box']
    const speed = +this.newCarForm.value['speed'];
    const location = this.newCarForm.value['location'];
    const price= +this.newCarForm.value['price'];
    let seats = 2;
    if(this.newCarForm.value['seat'] === '4 seats')
    {
      seats=4;
    }
    const newCar = new Car(model,registration,imgPath,description,mark,society,gearbox,speed,seats,location,price);

    
    this.carsService.addCar(newCar);
    this.newCarForm.reset();

  }

}
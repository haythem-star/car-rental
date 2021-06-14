import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  imgPath :string;
  start_rental : Date ;
  end_rental : Date;
  durations : string;
  model : string;
  price : number;
  sessionId ;


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data : Data) => {
      this.imgPath = data['service'].car.imgPath;
      this.start_rental = data['service'].start_rental;
      this.end_rental = data['service'].end_rental;
      this.durations = data['service'].durations;
      this.model = data['service'].car.model;
      this.price = data['service'].price;
      this.sessionId = data['service'].sessionId;
    })

  }

}

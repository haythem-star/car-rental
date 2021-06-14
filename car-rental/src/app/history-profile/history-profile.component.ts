import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history-service.service';
import { Rent } from '../models/rent';

@Component({
  selector: 'app-history-profile',
  templateUrl: './history-profile.component.html',
  styleUrls: ['./history-profile.component.css']
})
export class HistoryProfileComponent implements OnInit {

  rents = new Array<Rent>();

  constructor(private service:HistoryService) { }

  ngOnInit() {
    this.service.getHistory().subscribe(response => {
      this.rents = response.map(item => 
        {
          return new Rent(
              item.car, 
              item.start_rental,
              item.end_rental,
              item.price,
              item.user
          );
        });
    });
  }

}

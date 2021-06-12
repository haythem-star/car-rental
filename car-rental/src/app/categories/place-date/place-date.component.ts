import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-place-date',
  templateUrl: './place-date.component.html',
  styleUrls: ['./place-date.component.css']
})
export class PlaceDateComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['All Tunisia','Tunis', 'Sousse', 'sfax','Monestir','Mahdia','Jerba'];
  filteredOptions: Observable<string[]>;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }
}

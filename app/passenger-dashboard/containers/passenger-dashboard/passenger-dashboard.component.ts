import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  ngOnInit() {
    console.log('ngOnInit')
    this.passengers = [{
      id: 1,
      fullname: 'Leo',
      checkedIn: true,
      checkedInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Buxexa',
      checkedIn: false,
      checkedInDate: null,
      children: null
    }, {
      id: 3,
      fullname: 'Hermes',
      checkedIn: true,
      checkedInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Pepê',
      checkedIn: false,
      checkedInDate: null,
      children: [{
        name: 'mãe do peronio',
        age: 30
      }, {
        name: 'pai do peronio',
        age: 30
      }]
    }]
  }

  handleEdit(event: any) {
    console.log(event);
  }

  handleRemove(event: any) {
    console.log(event);
  }
}

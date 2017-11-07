import { Component, OnInit } from 'angular2/core';
import {NewReservationComponent} from './New-Reservation.component';
import {EditReservationsComponent} from './Edit-Reservations.component';
import {ReportsComponent} from './reports.component';

@Component({
  selector: 'app-Resort-Reservation',
  directives:[NewReservationComponent,EditReservationsComponent,ReportsComponent],
  templateUrl: 'app/Resort-Reservation.component.html',
  styleUrls: ['app/Resort-Reservation.component.css']
})

export class ResortReservationComponent{

  constructor() { }
  selection = [1,0,0,0]; // which Section is selected, 0: New Reservation, 1: Edit Reservation, 2: Reports, 3: Settings
  sideMenuItems = ["New Reservation","Edit Reservation","Reports","Settings"];
  onSideMenuSelect(index){
    var i;
    for (i = 0 ; i < this.selection.length ; i++){
      if (index === i){
        this.selection[i] = 1; 
      } else {
        this.selection[i] = 0;
      }
    }
  }
}

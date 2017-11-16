import { Component, OnInit } from 'angular2/core';
import {MyReservationsService} from './MyReservations';
import {Datepicker} from './Datepicker';
import {DatepickerComponent} from './Datepicker.component';

@Component({
  selector: 'admin-edit-reservation',
  directives: [DatepickerComponent],
  templateUrl: 'app/admin-edit-reservation.component.html',
  styleUrls: ['app/admin-edit-reservation.component.css']
})
export class AdminEditReservationComponent implements OnInit {

  constructor(private datepicker: Datepicker) { }

  ngOnInit() {
  }

  onSearch(obj){
    console.log(obj);
  }

}

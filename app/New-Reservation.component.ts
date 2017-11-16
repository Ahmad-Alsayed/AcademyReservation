import { Component, OnInit } from 'angular2/core';

import {Datepicker} from './Datepicker';
import { SelectedPipe } from 'angular2/src/core/change_detection/pipes';
import {DatepickerComponent} from './Datepicker.component';

@Component({
  selector: 'New-Reservation',
  directives: [DatepickerComponent],
  templateUrl: 'app/New-Reservation.component.html',
  styleUrls: ['app/New-Reservation.component.css']
})
export class NewReservationComponent implements OnInit {
datePickerEnabled = false;
public selectedYear: number;
public selectedMonth: number;
public selectedDay: number;
selectedDate: Date = new Date();
  constructor(private datepicker: Datepicker) { }

  ngOnInit() {
  }
onSubmit(obj){
    // let now = new Date();
    // console.log(obj);
    // console.log(now.getFullYear());
    // console.log(now.getMonth());
    // console.log(now.getDate());
    // console.log(parseInt("5hello"));
    // if (obj.year == (now.getFullYear() ) && obj.month == (now.getMonth() + 1) && (obj.day == now.getDate())){ // cannot reserve for same day as today
    //   alert("error");
    // }
    // if (obj.year < now.getFullYear()){ // check for past dates
    //   alert("error years");
    // }else if (obj.month < (now.getMonth() + 1) && obj.year <= now.getFullYear()){
    //   alert("error months");
    // } else if (obj.day < now.getDate() && obj.month <= (now.getMonth() + 1) && obj.year <= now.getFullYear()){
    //   alert("error days");
    // }
    console.log(obj);

  }

 

  
  

 




  
}


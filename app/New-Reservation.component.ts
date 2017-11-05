import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'New-Reservation',
  templateUrl: 'app/New-Reservation.component.html',
  styleUrls: ['app/New-Reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(obj){
  let now = new Date();
  console.log(obj);
  console.log(now.getFullYear());
  console.log(now.getMonth());
  console.log(now.getDate());
  console.log(parseInt("5hello"));
  if (obj.year == (now.getFullYear() ) && obj.month == (now.getMonth() + 1) && (obj.day == now.getDate())){ // cannot reserve for same day as today
    alert("error");
  }
  if (obj.year < now.getFullYear()){ // check for past dates
    alert("error years");
  }else if (obj.month < (now.getMonth() + 1) && obj.year <= now.getFullYear()){
    alert("error months");
  } else if (obj.day < now.getDate() && obj.month <= (now.getMonth() + 1) && obj.year <= now.getFullYear()){
    alert("error days");
  }

  }
}


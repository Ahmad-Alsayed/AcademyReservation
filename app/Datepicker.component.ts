import { Component, OnInit } from 'angular2/core';
import { Datepicker } from './Datepicker';
@Component({
  selector: 'app-Datepicker',
  templateUrl: 'app/Datepicker.component.html',
  styleUrls: ['app/Datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor(private datepicker: Datepicker) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from 'angular2/core';
import {MyReservationsService} from './MyReservations';

const myres: MyReservationsService[] = [
  new MyReservationsService(1,1,new Date(),0,0,0,0),
  new MyReservationsService(2,1,new Date(),2,1,0,0),
  new MyReservationsService(3,2,new Date(),5,0,2,1),
  new MyReservationsService(4,3,new Date(),3,4,1,0)

  ];
@Component({
  selector: 'Edit-Reservations',
  templateUrl: 'app/Edit-Reservations.component.html',
  styleUrls: ['app/Edit-Reservations.component.css']
})
export class EditReservationsComponent {
 m = myres;

 
onEdit(edit: MyReservationsService){
  edit.editMode = edit.editMode? 0 : 1;
 
}

getEditTextContent(item: MyReservationsService){
  return item.editMode ? "Save" : "Edit";
}
}

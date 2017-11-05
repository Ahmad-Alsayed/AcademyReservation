import { Component, OnInit } from 'angular2/core';
import {MyReservationsService} from './MyReservations';

const myres: MyReservationsService[] = [
  {id:1,employeeId:1,date: new Date(),familyMembersAbove3Years:0,familyMembersUnder3Years:0,guestMembersAbove3Years:0,guestMembersUnder3Years:0},
  {id:2,employeeId:1,date: new Date(),familyMembersAbove3Years:2,familyMembersUnder3Years:1,guestMembersAbove3Years:0,guestMembersUnder3Years:0},
  {id:3,employeeId:2,date: new Date(),familyMembersAbove3Years:5,familyMembersUnder3Years:0,guestMembersAbove3Years:2,guestMembersUnder3Years:1},
  {id:4,employeeId:3,date: new Date(),familyMembersAbove3Years:3,familyMembersUnder3Years:4,guestMembersAbove3Years:1,guestMembersUnder3Years:0}
];
@Component({
  selector: 'Edit-Reservations',
  templateUrl: 'app/Edit-Reservations.component.html',
  styleUrls: ['app/Edit-Reservations.component.css']
})
export class EditReservationsComponent {
 m = myres;
  editing;
txt = "Edit";
 
onEdit(edit){
  this.editing = edit;
  console.log(this.editing);
  if (this.txt === "Edit"){
   this.txt = "Save";
  } else{
    this.txt = "Edit";
    this.editing = null;
    
  }
}
}

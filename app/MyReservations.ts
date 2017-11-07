


export class MyReservationsService {

constructor(id: number,eid: number, date: Date, fa: number, fu: number, ga: number, gu: number, ) {
    this.id = id;
    this.employeeId = eid;
    this.date = date;
    this.familyMembersAbove3Years = fa;
    this.familyMembersUnder3Years = fu;
    this.guestMembersAbove3Years = ga;
    this.guestMembersUnder3Years = gu;
 }
id: Number;
familyMembersAbove3Years: Number;
familyMembersUnder3Years: Number;
guestMembersAbove3Years: Number;
guestMembersUnder3Years: Number;
date: Date;
employeeId: Number;
editMode = 0;

}
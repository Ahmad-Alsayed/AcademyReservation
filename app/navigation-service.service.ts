import { Injectable } from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class NavigationService {

constructor(private router: Router) { }

resortReservation(){
    this.router.navigateByUrl('./');
}
settings(){
    this.router.navigateByUrl("./db");
}


/*********************************/
newReservation(){

}

editReservation(){

}

reports(){

}



}
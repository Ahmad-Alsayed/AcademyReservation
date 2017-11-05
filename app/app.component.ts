import {Component} from 'angular2/core';
import {DashboardComponent} from './dashboard.component';
import {ResortReservationComponent} from './Resort-Reservation.component';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationService} from './navigation-service.service';
import {NewReservationComponent} from './New-Reservation.component';
@RouteConfig([
    {path: './', component:ResortReservationComponent, name:'ResortReservation',},
    {path: './db', component:NewReservationComponent, name:'NewReservation'}
])
@Component({
    selector:'app',
    directives:[DashboardComponent,ROUTER_DIRECTIVES],
    templateUrl:'app/app.component.html',
    styleUrls:['app/app.component.css']
})
export class AppComponent{
selection = [0,1,0]; // which Section is selected, 0: Training Academy, 1: Resort, 2: Settings
    constructor(
        private navigator: NavigationService
    ){}
    ngOnInit() {
        this.navigator.resortReservation();
    }
    onSelectMainMenuItem(index){
        console.log(index);
        var i; // apply css class
        for (i = 0 ; i < this.selection.length; i++){
            if (i === index){
                this.selection[i] = 1;
            } else {
                this.selection[i] = 0;
            }
        }
        // go to selected location
        if (index === 0){
            // Training Academy Section
        } else if (index === 1){
            // Resort Section
            this.navigator.resortReservation();
        } else if (index === 2){
            // Settings Section
            this.navigator.settings();
        }
    }
}

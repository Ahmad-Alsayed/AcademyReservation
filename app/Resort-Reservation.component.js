System.register(['angular2/core', './New-Reservation.component', './Edit-Reservations.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, New_Reservation_component_1, Edit_Reservations_component_1;
    var ResortReservationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (New_Reservation_component_1_1) {
                New_Reservation_component_1 = New_Reservation_component_1_1;
            },
            function (Edit_Reservations_component_1_1) {
                Edit_Reservations_component_1 = Edit_Reservations_component_1_1;
            }],
        execute: function() {
            ResortReservationComponent = (function () {
                function ResortReservationComponent() {
                    this.selection = [1, 0, 0, 0]; // which Section is selected, 0: New Reservation, 1: Edit Reservation, 2: Reports, 3: Settings
                    this.sideMenuItems = ["New Reservation", "Edit Reservation", "Reports", "Settings"];
                }
                ResortReservationComponent.prototype.onSideMenuSelect = function (index) {
                    var i;
                    for (i = 0; i < this.selection.length; i++) {
                        if (index === i) {
                            this.selection[i] = 1;
                        }
                        else {
                            this.selection[i] = 0;
                        }
                    }
                };
                ResortReservationComponent = __decorate([
                    core_1.Component({
                        selector: 'app-Resort-Reservation',
                        directives: [New_Reservation_component_1.NewReservationComponent, Edit_Reservations_component_1.EditReservationsComponent],
                        templateUrl: 'app/Resort-Reservation.component.html',
                        styleUrls: ['app/Resort-Reservation.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ResortReservationComponent);
                return ResortReservationComponent;
            }());
            exports_1("ResortReservationComponent", ResortReservationComponent);
        }
    }
});
//# sourceMappingURL=Resort-Reservation.component.js.map
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var myres, EditReservationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            myres = [
                { id: 1, employeeId: 1, date: new Date(), familyMembersAbove3Years: 0, familyMembersUnder3Years: 0, guestMembersAbove3Years: 0, guestMembersUnder3Years: 0 },
                { id: 2, employeeId: 1, date: new Date(), familyMembersAbove3Years: 2, familyMembersUnder3Years: 1, guestMembersAbove3Years: 0, guestMembersUnder3Years: 0 },
                { id: 3, employeeId: 2, date: new Date(), familyMembersAbove3Years: 5, familyMembersUnder3Years: 0, guestMembersAbove3Years: 2, guestMembersUnder3Years: 1 },
                { id: 4, employeeId: 3, date: new Date(), familyMembersAbove3Years: 3, familyMembersUnder3Years: 4, guestMembersAbove3Years: 1, guestMembersUnder3Years: 0 }
            ];
            EditReservationsComponent = (function () {
                function EditReservationsComponent() {
                    this.m = myres;
                    this.txt = "Edit";
                }
                EditReservationsComponent.prototype.onEdit = function (edit) {
                    this.editing = edit;
                    console.log(this.editing);
                    if (this.txt === "Edit") {
                        this.txt = "Save";
                    }
                    else {
                        this.txt = "Edit";
                        this.editing = null;
                    }
                };
                EditReservationsComponent = __decorate([
                    core_1.Component({
                        selector: 'Edit-Reservations',
                        templateUrl: 'app/Edit-Reservations.component.html',
                        styleUrls: ['app/Edit-Reservations.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditReservationsComponent);
                return EditReservationsComponent;
            }());
            exports_1("EditReservationsComponent", EditReservationsComponent);
        }
    }
});
//# sourceMappingURL=Edit-Reservations.component.js.map
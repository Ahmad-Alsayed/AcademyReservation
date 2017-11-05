System.register(['angular2/core', './dashboard.component', './Resort-Reservation.component', 'angular2/router', './navigation-service.service', './New-Reservation.component'], function(exports_1, context_1) {
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
    var core_1, dashboard_component_1, Resort_Reservation_component_1, router_1, navigation_service_service_1, New_Reservation_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (Resort_Reservation_component_1_1) {
                Resort_Reservation_component_1 = Resort_Reservation_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigation_service_service_1_1) {
                navigation_service_service_1 = navigation_service_service_1_1;
            },
            function (New_Reservation_component_1_1) {
                New_Reservation_component_1 = New_Reservation_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(navigator) {
                    this.navigator = navigator;
                    this.selection = [0, 1, 0]; // which Section is selected, 0: Training Academy, 1: Resort, 2: Settings
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.navigator.resortReservation();
                };
                AppComponent.prototype.onSelectMainMenuItem = function (index) {
                    console.log(index);
                    var i; // apply css class
                    for (i = 0; i < this.selection.length; i++) {
                        if (i === index) {
                            this.selection[i] = 1;
                        }
                        else {
                            this.selection[i] = 0;
                        }
                    }
                    // go to selected location
                    if (index === 0) {
                    }
                    else if (index === 1) {
                        // Resort Section
                        this.navigator.resortReservation();
                    }
                    else if (index === 2) {
                        // Settings Section
                        this.navigator.settings();
                    }
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: './', component: Resort_Reservation_component_1.ResortReservationComponent, name: 'ResortReservation', },
                        { path: './db', component: New_Reservation_component_1.NewReservationComponent, name: 'NewReservation' }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        directives: [dashboard_component_1.DashboardComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [navigation_service_service_1.NavigationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
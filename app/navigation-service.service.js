System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var NavigationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavigationService = (function () {
                function NavigationService(router) {
                    this.router = router;
                }
                NavigationService.prototype.resortReservation = function () {
                    this.router.navigateByUrl('./');
                };
                NavigationService.prototype.settings = function () {
                    this.router.navigateByUrl("./db");
                };
                /*********************************/
                NavigationService.prototype.newReservation = function () {
                };
                NavigationService.prototype.editReservation = function () {
                };
                NavigationService.prototype.reports = function () {
                };
                NavigationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NavigationService);
                return NavigationService;
            }());
            exports_1("NavigationService", NavigationService);
        }
    }
});
//# sourceMappingURL=navigation-service.service.js.map
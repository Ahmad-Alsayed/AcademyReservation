import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {NavigationService} from './navigation-service.service';
import {Datepicker} from './Datepicker';
bootstrap(AppComponent,[ROUTER_PROVIDERS,NavigationService,Datepicker]);
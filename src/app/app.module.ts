import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {NavBarComponent} from './nav/navbar.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from '../routes';
import {Error404Component} from './errors/404.component';
import {EventsAppComponent} from './events-app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver
}from './events/index'
//to avoid multiple imports check barreling
//It is at Routing and Navigating Pages - Organizing your Exports with Barrels

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('you have not saved this event. Do you really want to cancel?')
  }
  return true;
}

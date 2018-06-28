import { Routes} from '@angular/router';
import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {CreateEventComponent} from './app/events/create-event.component';
import {Error404Component} from './app/errors/404.component';
import {EventRouteActivator} from './app/events/event-details/event-route-activator.service';
import {EventListResolver} from './app/events/events-list-resolver.service';

/*
 Order of paths matter. First should be the one that you want to be processed first!
 */
export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },

  /* Before resolving this route call the EventListResolver and when finishes and return some data
  *  add the data to the property events
  * */
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  //Load UserModule from this path
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]

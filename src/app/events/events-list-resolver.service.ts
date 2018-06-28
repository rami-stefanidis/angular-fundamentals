import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventService:EventService){}

  //In lecture it uses this.eventService.getEvents.map ... Routing and Navigating Pages - Pre loading Data for Components
  resolve() {
      return this.eventService.getEvents();
  }
}

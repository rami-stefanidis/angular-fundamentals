import {Component} from '@angular/core';
import { EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

/*
    To get parameter id from url:
    1. import ActivatedRoute
    2. Add to constructor
    3. use: this.route.snapshot.params['id'])

   to cast  variable to number use +

 */
@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent {

  event: any

  constructor(private eventService:EventService, private route:ActivatedRoute){}


  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}

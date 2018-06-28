import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

/* no need for selected. will be directly routing to this page*/
@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>

    </div>
  `
})
/* implements OnInit to better show that we use this method */
export class EventsListComponent implements OnInit {

  events: any;

  /* This is shorthand for like this.eventservice = eventservice */
constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){

}

/* Best to run when component loaded into memory instead of constructor - ngOnInit*/
ngOnInit() {
  //this.eventService.getEvents().subscribe(events => {this.events = events});
  //pluralsight Routing and navigating pages - pre loading data for components
  this.events = this.route.snapshot.data['events'];
}


  handleThumbnailClick(eventName) {
      this.toastr.success(eventName);
  }


}

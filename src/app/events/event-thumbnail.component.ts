import {Component, EventEmitter, Input, Output} from '@angular/core';

/*
event? - ? is a safe navigation operator - allows to safely work on variables as they might be null.
*ngIf - *ngIf="event?.onlineUrl" - If evaluates to false will not display dom element
* [hidden] - [hidden]="!event?.location"> - Hides element from DOM
* !importan - .green { color: #003300 !important; } - on css styles so it does not get overriden
* [routerLink]="['/events',event.id]"  -- Add a routerlink on div
*/
@Component({
  selector: 'event-thumbnail',
  template: `
      <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          Online URL: {{event?.onlineUrl}}
        </div>
      </div>`,
  styles: [`
    .green { color: #003300 !important; }
    .bold {font-weight: bold;}
    .thumbnail {min-height: 210px;} /* for thumbnails to look uniform */
    .pad-left {margin-left: 10px; }
    .well div {color: #bbb; }
  `]
})
export class EventThumbnailComponent {

  @Input() event: any;
  someProperty: any = 'some value';

  logFoo() {
    console.log('foo');
  }

  /*can return string - return  'green bold'
  * return ['green' , 'bold']
  */
  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart , bold: isEarlyStart};
  }
}

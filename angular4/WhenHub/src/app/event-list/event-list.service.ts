import { Event } from './../shared/event.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventListService {

  // eventsChanged = new EventEmitter<Event[]>();

  constructor() { }

  getEvents(){
    // return this.events.slice();
  }

  // addEvent(event: Event) {
  //   this.events.push(event);
  //   this.eventsChanged.emit(this.events.slice());
  // }
  //
  // addEvents(event: Event[]){
  //   this.events.push(...event);
  //   this.eventsChanged.emit(this.events.slice());
  // }

}

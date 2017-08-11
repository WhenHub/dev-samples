import { Event } from '../shared/event.model';

export class Schedule {
  constructor( public name: string, public id: string, public events: Event) { }
}

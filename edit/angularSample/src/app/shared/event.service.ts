import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import {Media} from "./media.model";
import { Event } from '../../app/shared/event.model';
import { SharedService } from '../../app/shared/shared.service';

@Injectable()
export class EventService {

  event = new EventEmitter<Event>();
  constructor(private http:Http, private sharedService: SharedService) { }

  getEvent(scheduleId: string, eventId: string): Promise<Event> {
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.sharedService.accessToken
    });
    const url = `${whenhubUrl}/schedules/${scheduleId}/events/${eventId}`;

    return this.http
      .get(url, {headers: headers})
      .toPromise()
      .then(event => event.json() as Event[])
      .catch(this.handleError);
  }

  getMedia(eventId: string){
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.sharedService.accessToken
    });
    const url = `${whenhubUrl}/events/${eventId}/media`;

    return this.http
      .get(url, {headers: headers})
      .toPromise()
      .then(media => media.json() as Media[])
      .catch(this.handleError);
  }

  updateEvent(event: Event){
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.sharedService.accessToken
    });
    const url = `${whenhubUrl}/schedules/${event.scheduleId}/events/${event.id}`
    this.http.put(url, event, { headers: headers}).subscribe();
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }

}

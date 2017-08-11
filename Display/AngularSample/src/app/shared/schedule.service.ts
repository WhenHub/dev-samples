import { Schedule } from '../../app/shared/schedule.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { SharedService } from '../../app/shared/shared.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class ScheduleService {

  schedule = new EventEmitter<Schedule>();

  constructor(private http:Http, private sharedService: SharedService) {  }

  getSchedules(): Promise<Schedule> {
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.sharedService.accessToken
      });

    const url = `${whenhubUrl}/users/me/schedules?filter[include]=media&filter[include][events]=media`;

    return this.http
      .get(url, {headers: headers})
      .toPromise()
      .then(schedules => schedules.json() as Schedule[])
      .catch(this.handleError);
  }

  getSchedule(id: string): Promise<Schedule> {
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.sharedService.accessToken
    });
    const url = `${whenhubUrl}/schedules/${id}?filter[include]=media&filter[include][events]=media`;
    return this.http
      .get(url, {headers: headers})
      .toPromise()
      .then(schedule => schedule.json() as Schedule[])
      .catch(this.handleError);
  }

  updateSchedule(schedule: Schedule){
    const whenhubUrl = 'https://api.whenhub.com/api';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.sharedService.accessToken
    });
    const url = `${whenhubUrl}/schedules/${schedule.id}`
    this.http
      .patch(url, schedule, { headers: headers}).
      subscribe(

    );
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }

}

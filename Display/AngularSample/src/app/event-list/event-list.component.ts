import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap} from "@angular/router";

import 'rxjs/add/operator/switchMap';

import { Schedule} from "../shared/schedule.model";
import { ScheduleService} from "../shared/schedule.service";
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @ViewChild('scheduleNameInput') scheduleNameInputRef: ElementRef;


  schedule: Schedule;
  events: Event;
  scheduleName: string;
  editMode: false;

  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => this.scheduleService.getSchedule(params.get('id'))
      )
      .subscribe(schedule => {
        this.schedule = schedule;
        console.log(this.schedule);
        this.events = this.schedule.events;
        this.scheduleName = this.schedule.name;
      });
  }
  goBack(): void {
    this.location.back();
  }

  updateSchedule() {
    this.schedule.name = this.scheduleName;
    this.scheduleService.updateSchedule(this.schedule);
    this.editMode = false;
  }
}

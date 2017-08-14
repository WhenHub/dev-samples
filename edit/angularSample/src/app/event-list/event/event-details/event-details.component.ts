import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";

import 'rxjs/add/operator/switchMap';

import { Schedule } from "../../../shared/schedule.model";
import { EventService } from '../../../shared/event.service';
import { Event } from "../../../shared/event.model";
import { Media } from "../../../shared/media.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input('appMediaItem') appMediaItem: Media;
  event: Event;
  schedule: Schedule;
  media: Media;
  eventName: string;
  mediaItems: Media;
  eventDescription: string;
  startDate: Date;
  endDate: Date;
  editMode: false;
  eventId: Subscription;
  scheduleId: Subscription;


  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => this.eventService.getEvent(params.get('scheduleId'), params.get('eventId'))
      )
      .subscribe(event => {
        this.event = event;
        console.log(this.event);
        this.eventName = this.event.name;
        this.eventDescription = this.event.description;
        this.startDate = this.event.when.startDate ? new Date(this.event.when.startDate) : null;
        this.endDate =  this.event.when.endDate ? new Date(this.event.when.endDate) : null;
      });

    this.route.paramMap
      .switchMap(
        (params: ParamMap) => this.eventService.getMedia(params.get('eventId'))
      )
      .subscribe(media => {
        this.media = media;
        console.log(this.media);

      });
    this.mediaItems = this.media;
  }

  saveEvent() {
    this.event.name = this.eventName;
    this.editMode = false;
    this.event.description = this.eventDescription;
    this.eventService.updateEvent(this.event);
  }

  goBack(): void {
    this.location.back();
  }

}

import { ScheduleService } from '../../shared/schedule.service';
import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../../shared/schedule.model';
import { Event } from '../../shared/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event:Event;
  @Input() schedule: Schedule;
  public eventImage: string;

  constructor(
    private scheduleService: ScheduleService,
    private router: Router) {
  }


  ngOnInit() {
    console.log('this.event', this.event);

  }

  onSelect(schedule: Schedule, event: Event) {
    this.router.navigate(['/schedule/' +schedule.id + '/event', event.id]);
  }

}

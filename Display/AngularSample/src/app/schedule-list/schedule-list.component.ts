import { ScheduleService} from "../shared/schedule.service";
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Schedule} from "../shared/schedule.model";

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  @Output() scheduleWasSelected = new EventEmitter<Schedule>();

  schedules: Schedule;
  constructor( private scheduleService: ScheduleService,) { }

  getSchedules(): void {
    this.scheduleService
      .getSchedules()
      .then(schedules => this.schedules = schedules);
  }

  ngOnInit(): void {
    this.getSchedules();
  }

  onScheduleSelected(schedule: Schedule) {
    this.scheduleWasSelected.emit(schedule);
  }

}

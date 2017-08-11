import { ScheduleService } from '../../shared/schedule.service'
import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from "../../shared/schedule.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() schedule: Schedule;

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit() {
    console.log('schedule.component');
  }

  onSelect(schedule: Schedule) {
    this.router.navigate(['/schedule', schedule.id]);
  }

  goWhencast(scheduleId: string) {
    this.router.navigate(['/whencast', scheduleId]);
  }

}

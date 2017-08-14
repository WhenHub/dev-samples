import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { EventService } from "./shared/event.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';
import { ScheduleComponent } from './schedule-list/schedule/schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleService } from "./shared/schedule.service";
import { EventDetailsComponent } from './event-list/event/event-details/event-details.component';
import { SharedService } from "./shared/shared.service";
import { MediaItemComponent } from './event-list/event/event-details/media-item/media-item.component';
import { WhencasterComponent } from './whencaster/whencaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    EventListComponent,
    EventComponent,
    ScheduleComponent,
    ScheduleListComponent,
    EventDetailsComponent,
    MediaItemComponent,
    WhencasterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'schedule/:scheduleId/event/:eventId',
        component: EventDetailsComponent
      },
      {
        path: 'schedule/:id',
        component: EventListComponent
      },
      {
        path: 'whencast/:id',
        component: WhencasterComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        component: ScheduleListComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [EventService, ScheduleService, SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }

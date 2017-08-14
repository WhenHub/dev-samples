import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Location } from '@angular/common';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-whencaster',
  templateUrl: './whencaster.component.html',
  styleUrls: ['./whencaster.component.scss']
})
export class WhencasterComponent implements OnInit {

  scheduleId: string;
  iFrameSrc;

  constructor(
    private route: ActivatedRoute,
    public sanitizer:DomSanitizer,
    private location: Location
  ) {}

  ngOnInit() {

    this.route.paramMap
      .switchMap(
        (params: ParamMap) => this.scheduleId = params.get('id')
      )
      .subscribe();

    this.iFrameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://cdn.whenhub.com/v1/player/player.html?element-id=schedule&schedule-id=${this.scheduleId}&app-url-base=https://studio.whenhub.com&api-url-base=https://api.whenhub.com/api&https://viz.whenhub.com/&host-page-url=https%3A%2F%2Fstudio.whenhub.com%2Fschedules%${this.scheduleId}`);
  }

  goBack(): void {
    this.location.back();
  }

}

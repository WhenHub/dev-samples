import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openLogin = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.accessToken = '<<YOUR_ACCESS_TOKEN>>';
  }

}

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
    this.sharedService.accessToken = 'TzGzqljHMJZMNQNA8XBJ4u0LFLB9B5z8Z1TxRjv0sMhuhMyegcgeJA0bn3iNJoiW';
  }

}

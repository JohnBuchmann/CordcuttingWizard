import { CURRENT_PLATFORM } from 'preboot/test/e2e/e2e.app';
import { Component, OnInit } from '@angular/core';
import { Device } from './../../models/device.model';
import { DevicesService } from './../../services/devices.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';



declare var jQuery: any;

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  isCollapsed = true;
  viewDetailsButtonText = 'View Details';

  allChannels = [];

  AppleTvChannels = [];
  RokuChannels = [];



  selectedChannels = [];

  noResults = true;
  countChecked = 0;

  AppleTv = [];
  Chromecast = []
  Roku = [];

  AppleTvName = 'Apple TV';
  ChromecastName = 'Chromecast';
  RokuName = 'Roku';

  constructor(
      private devicesService: DevicesService,
      public modalService: NgbModal) {

    this.allChannels = this.devicesService.getAllChannels();
    this.AppleTvChannels = this.devicesService.getAppleTvChannels();
    this.RokuChannels = this.devicesService.getRokuChannels();

    console.log(this.allChannels);

  }



  ngOnInit() {

  }

  onChannelClick(event, channel, index) {

    const isChecked = event.target.checked;

    if (isChecked) {
      const myPromise = new Promise((resolve, reject) => {
        this.selectedChannels.push(channel);
        this.clear();
        resolve();
      })
      .then(() => {
        this.countChecked += 1;
        this.filterChannels();
      })
    } else {
       const idx = this.selectedChannels.indexOf(channel);
       const myPromise = new Promise((resolve, reject) => {
         this.selectedChannels.splice(idx, 1);
         this.clear();
         resolve();
       })
       .then(() => {
         this.countChecked -= 1;
         this.filterChannels();
       })
     }
  }

  clear() {
    this.AppleTv = [];
    this.Chromecast = [];
    this.Roku = [];
  }


  filterChannels(){
    this.selectedChannels.forEach((current, index) => {

      for (let channel of this.RokuChannels) {
        if (channel.name.toLowerCase() === current.toLowerCase()) {
          this.Roku.push(channel);
        }
      }



      for (let channel of this.AppleTvChannels) {
        if (channel.name.toLowerCase() === current.toLowerCase()) {
          this.AppleTv.push(channel);
        }
      }
    })

    if (this.selectedChannels.length > this.Roku.length) {
      this.Roku = [];
    }

    if (this.selectedChannels.length > this.AppleTv.length) {
      this.AppleTv = [];
    }

    this.checkIfResults();

  }



  checkIfResults() {
    if (this.Roku.length === 0
        && this.AppleTv.length === 0) {
      this.noResults = true;
    } else {
      this.noResults = false;
    }
  }



onClickDetails() {
  this.isCollapsed = !this.isCollapsed;
  if (this.isCollapsed) {
    this.viewDetailsButtonText = 'View Details';
  } else {
    this.viewDetailsButtonText = 'Hide Details';
  }

  }

}

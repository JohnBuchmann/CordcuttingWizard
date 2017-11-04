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

  allDeviceChannels = [];
  allDeviceFeatures = [];


  allAppleTvChannels = [];
  allRokuChannels = [];

  allRokuFeatures = [];
  allAppleTvFeatures = [];



  selectedChannels = [];
  selectedFeatures = [];


  noChannelResults = true;
  noFeatureResults = true;
  countChecked = 0;



  AppleTvHasChannels = [];
  RokuHasChannels = [];

  AppleTvHasFeatures = [];
  RokuHasFeatures = [];



  AppleTvName = 'Apple TV';
  ChromecastName = 'Chromecast';
  RokuName = 'Roku';

  constructor(
      private devicesService: DevicesService,
      public modalService: NgbModal) {

      this.allDeviceChannels = this.devicesService.getAllChannels();

      // get all features and features for each device
      this.allDeviceFeatures = this.devicesService.getAllFeatures();
      this.allAppleTvFeatures = this.devicesService.getDeviceFeatures('Apple TV');
      this.allRokuFeatures = this.devicesService.getDeviceFeatures('Roku');

      // get the channels that each device supports (also includes status)
      this.allAppleTvChannels = this.devicesService.getDeviceChannels('Apple TV');
      this.allRokuChannels = this.devicesService.getDeviceChannels('Roku');
  }



  ngOnInit() {

  }

  channelsTabClick() {
    // clear features from Features tab
    this.clearFeatures();
    this.selectedFeatures = [];
  }

  featuresTabClick() {
    // clear channels from Channels tab
    this.clearChannels();
    this.selectedChannels = [];
  }

  onChannelClick(event, channel, index) {

    const isChecked = event.target.checked;

    if (isChecked) {
      const myPromise = new Promise((resolve, reject) => {
        this.selectedChannels.push(channel);
        this.clearChannels();
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
         this.clearChannels();
         resolve();
       })
       .then(() => {
         this.countChecked -= 1;
         this.filterChannels();
       })
     }
  }

  onFeatureClick(event, feature, index) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const myPromise = new Promise((resolve, reject) => {
        this.selectedFeatures.push(feature);
        this.clearFeatures();
        resolve();
      })
      .then(() => {
        this.countChecked += 1;
        this.filterFeatures();
      })
    } else {
      const idx = this.selectedFeatures.indexOf(feature);
      const myPromise = new Promise((resolve, reject) => {
        this.selectedFeatures.splice(idx, 1);
        this.clearFeatures();
        resolve();
      })
      .then(() => {
        this.countChecked -= 1;
        this.filterFeatures();
      })
    }
  }

  clearChannels() {
    this.AppleTvHasChannels = [];
    this.RokuHasChannels = [];
  }

  clearFeatures() {
    this.AppleTvHasFeatures = [];
    this.RokuHasFeatures = [];
  }


  filterChannels(){
    console.log(this.RokuHasChannels.length);
    this.selectedChannels.forEach((current, index) => {

      for (let channel of this.allRokuChannels) {
        if (channel.name.toLowerCase() === current.toLowerCase()) {
          this.RokuHasChannels.push(channel);
        }
      }
      for (let channel of this.allAppleTvChannels) {
        if (channel.name.toLowerCase() === current.toLowerCase()) {
          this.AppleTvHasChannels.push(channel);
        }
      }
    })
    //console.log(this.RokuHasChannels.length);

    if (this.selectedChannels.length > this.RokuHasChannels.length) {
      this.RokuHasChannels = [];
    }

    if (this.selectedChannels.length > this.AppleTvHasChannels.length) {
      this.AppleTvHasChannels = [];
    }

    this.checkIfChannelResults();

  }



  filterFeatures() {

    this.selectedFeatures.forEach((current, index) => {

            for (let feature of this.allAppleTvFeatures) {
              if (feature.key === current.key) {
                this.AppleTvHasFeatures.push({key: feature.key, status: feature.status});
              }
            }
            for (let feature of this.allRokuFeatures) {
              if (feature.key === current.key) {
                this.RokuHasFeatures.push({key: feature.key, status: feature.status});
              }
            }
          }
        )


        if (this.selectedFeatures.length > this.AppleTvHasFeatures.length) {
          this.AppleTvHasFeatures = [];
        }


          if (this.selectedFeatures.length > this.RokuHasFeatures.length) {
            this.RokuHasFeatures = [];
          }

          this.checkIfFeaturesResults();
  }



  checkIfChannelResults() {
    // if (this.RokuHasChannels.length === 0
    //     && this.AppleTvHasChannels.length === 0) {
    //   this.noChannelResults = true;
    // } else {
    //   this.noChannelResults = false;
    // }
    this.noChannelResults = false;
  }

  checkIfFeaturesResults() {
    // if (this.RokuHasChannels.length === 0
    //     && this.AppleTvHasChannels.length === 0) {
    //   this.noChannelResults = true;
    // } else {
    //   this.noChannelResults = false;
    // }
    this.noFeatureResults = false;
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

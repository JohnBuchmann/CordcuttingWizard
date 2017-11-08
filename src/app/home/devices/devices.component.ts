import { CURRENT_PLATFORM } from 'preboot/test/e2e/e2e.app';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Device } from './../../models/device.model';
import { DevicesService } from './../../services/devices.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import {APPLETV_LOGO, ROKU_LOGO, CHROMECAST_LOGO, AMAZONFIRE_LOGO, NVIDIASHIELD_LOGO } from './../../config/config';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  animations: [
    trigger('collapse', [
      state('collapsed', style({
        'height': '0px'
      })),
      state('expanded', style({
        'height': '*'
      })),
      transition('collapsed => expanded', animate(300)),
      transition('expanded => collapsed', animate(300))
    ]),

    trigger(
      'animateQuickResults', [
        transition(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('300ms',
          style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('300ms',
          style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class DevicesComponent implements OnInit {
  state = 'collapsed';

  appletvLogo = APPLETV_LOGO;
  rokuLogo = ROKU_LOGO;
  chromecastLogo = CHROMECAST_LOGO;
  amazonfireLogo = AMAZONFIRE_LOGO;
  nvidiashieldLogo = NVIDIASHIELD_LOGO;


  whichTab = "channels"; // or "features"
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

  // onCollapse() {
  //   this.state == 'collapsed' ? this.state = 'expanded' : this.state = 'collapsed';
  // }

  channelsTabClick() {
    // clear and reset stuff
    this.clearFeatures();
    this.selectedFeatures = [];
    this.whichTab = "channels";
    this.countChecked = 0;
    this.noFeatureResults = true;
  }

  featuresTabClick() {
    // clear and reset stuff
    this.clearChannels();
    this.selectedChannels = [];
    this.whichTab = "features";
    this.countChecked = 0;
    this.noChannelResults = true;
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
                this.AppleTvHasFeatures.push({key: feature.key, status: feature.status, featureName: this.allDeviceFeatures[feature.key - 1].status});
              }
            }

            for (let feature of this.allRokuFeatures) {
              if (feature.key === current.key) {
                this.RokuHasFeatures.push({key: feature.key, status: feature.status, featureName: this.allDeviceFeatures[feature.key - 1].status});
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
    if (this.RokuHasChannels.length === 0
        && this.AppleTvHasChannels.length === 0) {
      this.noChannelResults = true;
    } else {
      this.noChannelResults = false;
    }

  }

  checkIfFeaturesResults() {
    if (this.RokuHasFeatures.length === 0
        && this.AppleTvHasFeatures.length === 0) {
      this.noFeatureResults = true;
    } else {
      this.noFeatureResults = false;
    }
  }



onClickDetails() {
  this.state == 'collapsed' ? this.state = 'expanded' : this.state = 'collapsed';
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.viewDetailsButtonText = 'View Details';
    } else {
      this.viewDetailsButtonText = 'Hide Details';
    }
  }
}

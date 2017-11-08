import { Component, OnInit } from '@angular/core';

// import DATA  from './../../../config/config';
// import { YOUTUBE_LOGO, HULU_LOGO, SLING_LOGO, DIRECTTV_LOGO, VUE_LOGO, FUBO_LOGO } from './../../../config/config';
// import DEVICE_FEATURES from './../../../config/config';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  DeviceFeatures = [];
  DeviceChannels = [];

  constructor() { }

  ngOnInit() {

    // this.DeviceFeatures = DATA.DeviceFeatures;
    // this.DeviceChannels = DATA.DeviceChannels;

    }

  }



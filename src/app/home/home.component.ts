import { Component, OnDestroy, OnInit } from '@angular/core';
import { Channel } from './../models/channel.model';
import { ChannelsService } from './../services/channels.service';
import { identifierModuleUrl } from '@angular/compiler';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from './../services/email.service';

import { Observable } from 'rxjs/Observable';

import { YOUTUBE_LOGO, HULU_LOGO, SLING_LOGO, DIRECTTV_LOGO, VUE_LOGO, FUBO_LOGO } from './../config/config';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  viewDetailsButtonText = 'View Details';

  allChannels: Channel[] = [];
  selectedChannels: Channel[] = [];

  noResults = true;
  countChecked = 0;

  hulu: Channel[] = [];
  sling: Channel[] = []
  youtube: Channel[] = [];
  directtv: Channel[] = [];
  vue: Channel[] = [];
  fubo: Channel[] = [];

  huluName = 'hulu';
  slingName = 'sling';
  youtubeName = 'youtube';
  directtvName = 'directtv';
  vueName = 'vue';
  fuboName = 'fubo';


  huluLogo = HULU_LOGO;
  youtubeLogo = YOUTUBE_LOGO;
  slingLogo = SLING_LOGO;
  directtvLogo = DIRECTTV_LOGO;
  vueLogo = VUE_LOGO;
  fuboLogo = FUBO_LOGO;

  constructor(
      private channelsService: ChannelsService,
      public modalService: NgbModal,
      public emailService: EmailService) {

    this.channelsService.downloadChannels();
    this.allChannels = this.channelsService.getAllChannels();
  }



  ngOnInit() {

  }

  ngOnDestroy() {
  }


  onChannelClick(event, channel: Channel, index) {
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

    console.log(this.selectedChannels);

  }

  clear() {
    this.hulu = [];
    this.sling = [];
    this.youtube = [];
    this.directtv = [];
    this.vue = [];
    this.fubo = [];
  }


  filterChannels(){

    for (let i of this.selectedChannels) {

      if (i.devices.hulu.status.toString().startsWith('Yes')) {
        this.hulu.push(i);
      }

      if (i.devices.sling.status.toString().startsWith('Yes')) {
        this.sling.push(i);
      }

      if (i.devices.youtube.status.toString().startsWith('Yes')) {
        this.youtube.push(i);
      }

      if (i.devices.directtv.status.toString().startsWith('Yes')) {
        this.directtv.push(i);
      }

      if (i.devices.vue.status.toString().startsWith('Yes')) {
        this.vue.push(i);
      }

      if (i.devices.fubo) {
        if (i.devices.fubo.status.toString().startsWith('Yes')) {
          this.fubo.push(i);
        }
      }




    }



    let huluArray = [];
    for (let device of this.hulu) {
      if (device.devices.hulu.status === 'Yes') {
          huluArray.push('Yes');
      }
    }
    if (huluArray.length !== this.selectedChannels.length) {
      this.hulu = [];
    }



    let slingArray = [];
    for (let device of this.sling) {
      if (device.devices.sling.status === 'Yes') {
        slingArray.push('Yes');
      }
    }
    if (slingArray.length !== this.selectedChannels.length) {
      this.sling = [];
    }




    let youtubeArray = [];
    for (let device of this.youtube) {
      if (device.devices.youtube.status === 'Yes') {
        youtubeArray.push('Yes');
      }
    }
    if (youtubeArray.length !== this.selectedChannels.length) {
      this.youtube = [];
    }





    let directtvArray = [];
    for (let device of this.directtv) {
      if (device.devices.directtv.status === 'Yes') {
        directtvArray.push('Yes');
      }
    }
    if (directtvArray.length !== this.selectedChannels.length) {
      this.directtv = [];
    }




    let vueArray = [];
    for (let device of this.vue) {
      if (device.devices.vue.status === 'Yes') {
        vueArray.push('Yes');
      }
    }
    if (vueArray.length !== this.selectedChannels.length) {
      this.vue = [];
    }





    let fuboArray = [];
    for (let device of this.fubo) {
      if (device.devices.fubo.status === 'Yes') {
        fuboArray.push('Yes');
      }
    }
    if (fuboArray.length !== this.selectedChannels.length) {
      this.fubo = [];
    }


    this.checkIfResults();
  }


checkIfResults() {
  if (this.hulu.length === 0
      && this.sling.length === 0
      && this.youtube.length === 0
      && this.directtv.length === 0
      && this.vue.length === 0
      && this.fubo.length === 0) {
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

aaa() {
  this.channelsService.aaa();
}

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Channel } from './../../models/channel.model';
import { ServicesService } from './../../services/services.service';
import { identifierModuleUrl } from '@angular/compiler';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from './../../services/email.service';

import { Observable } from 'rxjs/Observable';

import { YOUTUBE_LOGO, HULU_LOGO, SLING_LOGO, DIRECTTV_LOGO, VUE_LOGO, FUBO_LOGO } from './../../config/config';

declare var jQuery: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
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
export class ServicesComponent implements OnInit {
  state = 'collapsed';
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
      private servicesService: ServicesService,
      public modalService: NgbModal,
      public emailService: EmailService) {

    this.servicesService.downloadChannels();
    this.allChannels = this.servicesService.getAllChannels();
  }



  ngOnInit() {

  }

  ngOnDestroy() {
  }

  // open(content) {
  //   this.modalService.open(content);
  // }

  open(content) {
    this.modalService.open(content);
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
  this.state == 'collapsed' ? this.state = 'expanded' : this.state = 'collapsed';
  this.isCollapsed = !this.isCollapsed;
  if (this.isCollapsed) {
    this.viewDetailsButtonText = 'View Details';
  } else {
    this.viewDetailsButtonText = 'Hide Details';
  }

  }





}

import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';

import { Channel } from './../../models/channel.model';

@Component({
  selector: 'app-manager',
  templateUrl: './service-manager.component.html',
  styleUrls: ['./service-manager.component.css']
})
export class ServiceManagerComponent implements OnInit {

  allChannels2: Channel[] = [];

  constructor(
          private servicesService: ServicesService,
          private router: Router,
          private route: ActivatedRoute) { }

  ngOnInit() {
        this.allChannels2 = this.servicesService.getAllChannels();

        // this.servicesService.channelsSubject
        //   .subscribe((res) => {
        //     console.log(res);
        //   });
  }


  onEditChannel(id: string) {
    this.router.navigate(['/manager', 'form'], {queryParams: {mode: 'edit', id: id }});
  }
}

import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../services/channels.service';
import { Component, OnInit } from '@angular/core';

import { Channel } from './../models/channel.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  allChannels2: Channel[] = [];

  constructor(
          private channelsService: ChannelsService,
          private router: Router,
          private route: ActivatedRoute) { }

  ngOnInit() {
        this.allChannels2 = this.channelsService.getAllChannels();

        // this.channelsService.channelsSubject
        //   .subscribe((res) => {
        //     console.log(res);
        //   });
  }


  onEditChannel(id: string) {
    this.router.navigate(['/manager', 'form'], {queryParams: {mode: 'edit', id: id }});
  }
}

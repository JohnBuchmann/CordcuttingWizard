import { MessageService } from '../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../services/channels.service';
import { Channel } from '../models/channel.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Message, MessageType } from './../models/message.model';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.css']
})
export class ChannelFormComponent implements OnInit {
  myForm: FormGroup;
  hideForm = true;
  editMode = false;
  _id = '';
  channelToEdit: Channel;

  constructor(
      private channelService: ChannelsService,
      private route: ActivatedRoute,
      private router: Router,
      private messageService: MessageService ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'logoimage': new FormControl('./../assets/logos/', Validators.required),

      'status_hulu': new FormControl('', Validators.required),
      'misc_hulu': new FormControl(''),

      'status_sling': new FormControl('', Validators.required),
      'misc_sling': new FormControl(''),

      'status_youtube': new FormControl('', Validators.required),
      'misc_youtube': new FormControl(''),

      'status_directtv': new FormControl('', Validators.required),
      'misc_directtv': new FormControl(''),

      'status_vue': new FormControl('', Validators.required),
      'misc_vue': new FormControl(''),

      'status_fubo': new FormControl('', Validators.required),
      'misc_fubo': new FormControl('')
    });

    this.route.queryParams.subscribe((params) => {
      if ( params['mode'] === 'add') {
        this.hideForm = false;
        this.editMode = false;
        this.myForm.reset();
      } else if (params['mode'] === 'edit') {
        this.hideForm = false;
        this.editMode = true;
        this._id = params['id'];
        this.getChannel(this._id);
        this.fillForm();
      }
    });
  }

  fillForm () {
    this.myForm.patchValue({
      'name': this.channelToEdit.name,
      'logoimage': this.channelToEdit.image,
      'status_hulu': this.channelToEdit.devices.hulu.status,
      'misc_hulu': this.channelToEdit.devices.hulu.misc,
      'status_sling': this.channelToEdit.devices.sling.status,
      'misc_sling': this.channelToEdit.devices.sling.misc,
      'status_youtube': this.channelToEdit.devices.youtube.status,
      'misc_youtube': this.channelToEdit.devices.youtube.misc,
      'status_directtv': this.channelToEdit.devices.directtv.status,
      'misc_directtv': this.channelToEdit.devices.directtv.misc,
      'status_vue': this.channelToEdit.devices.vue.status,
      'misc_vue': this.channelToEdit.devices.vue.misc,
      // 'status_fubo': this.channelToEdit.devices.fubo.status,
      // 'misc_fubo?': this.channelToEdit.devices.fubo.misc
    });

    if (this.channelToEdit.devices.fubo) {
      this.myForm.patchValue({
        'status_fubo': this.channelToEdit.devices.fubo.status,
        'misc_fubo?': this.channelToEdit.devices.fubo.misc
      });
    }


  }


  getChannel(id: string) {
    this.channelService.getChannel(id)
      .subscribe((channel) => {
        this.channelToEdit = channel;
      });
  }

  onSubmit() {
    // grab values from all form fields
    const name = this.myForm.controls['name'].value;
    const logoimage = this.myForm.controls['logoimage'].value;
    const status_hulu = this.myForm.controls['status_hulu'].value;
    const misc_hulu = this.myForm.controls['misc_hulu'].value;

    const status_sling = this.myForm.controls['status_sling'].value;
    const misc_sling = this.myForm.controls['misc_sling'].value;

    const status_youtube = this.myForm.controls['status_youtube'].value;
    const misc_youtube = this.myForm.controls['misc_youtube'].value;

    const status_directtv = this.myForm.controls['status_directtv'].value;
    const misc_directtv = this.myForm.controls['misc_directtv'].value;

    const status_vue = this.myForm.controls['status_vue'].value;
    const misc_vue = this.myForm.controls['misc_vue'].value;

    const status_fubo = this.myForm.controls['status_fubo'].value;
    const misc_fubo = this.myForm.controls['misc_fubo'].value;

    const channel = new Channel(
      name,
      logoimage,
      {hulu: {
        status: status_hulu,
        misc: misc_hulu
      },
      sling: {
        status: status_sling,
        misc: misc_sling
      },
      youtube: {
        status: status_youtube,
        misc: misc_youtube
      },
      directtv: {
        status: status_directtv,
        misc: misc_directtv
      },
      vue: {
        status: status_vue,
        misc: misc_vue
      },
      fubo: {
        status: status_fubo,
        misc: misc_fubo
      }}
    );


    if (!this.editMode) {
      this.addChannel(channel);
    } else if (this.editMode) {
      this.updateChannel(this._id, channel);
    }




  }

  addChannel(channel: Channel) {
    this.channelService.addChannel(channel)
      .subscribe(
        (res) => {
          this.channelService.downloaded = false;
          this.hideForm = true;
          this.editMode = false;
          this._id = '';
          this.messageService.handleMessage(new Message(MessageType.message, 'Channel Added', 'The channel has been successfully added!'));
          this.router.navigate(['/']);
      },
        (err) => {
          alert('error adding channel');
        }
    );
  }

  updateChannel(_id: string, channelToEdit: Channel) {
    this.channelService.updateChannel(_id, channelToEdit)
    .subscribe(
      (res) => {
        this.channelService.downloaded = false;
        this.hideForm = true;
        this.editMode = false;
        this._id = '';
        this.messageService.handleMessage(new Message(
            MessageType.message,
            'Channel Updated',
            'The channel has been successfully updated'
          ));
        this.router.navigate(['/']);
      },
        (err) => {
          this.messageService.handleMessage(new Message(
              MessageType.error,
              'Error',
              'There was a problem updating the channel. Please try again.'
            ));
        }
    );
  }

  deleteChannel() {
    this.channelService.deleteChannel(this._id)
      .subscribe(
        (res) => {
          this.channelService.downloaded = false;
          this.hideForm = true;
          this.editMode = false;
          this._id = '';
          this.messageService.handleMessage(new Message(
              MessageType.message,
              'Channel Deleted',
              'The channel has been successfully Deleted'
            ));
          this.router.navigate(['/']);
        },
        (err) => {
          this.messageService.handleMessage(new Message(
            MessageType.error,
            'Delete Error',
            'There was an error deleting the channel!'
          ));
        }
      );
  }
}


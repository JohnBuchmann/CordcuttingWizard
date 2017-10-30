import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Channel } from '../models/channel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import { FIREBASE_URL } from '../config/config';

@Injectable()
export class DevicesService {

  private RokuChannels: string[] = [];
  private RokuChannelsAndStatus: {name: string, status: string}[] = [];

  private AppleTvChannels: string[] = [];
  private AppleTvChannelsAndStatus: {name: string, status: string}[] = [];

  downloaded = false;

  channelsSubject = new Subject<Channel[]>();

  constructor(
      private http: Http,
      private af: AngularFireDatabase ) {}

  getAllChannels() {
    // if (!this.downloaded) {

      let AllChannels = [];
      if (this.RokuChannels.length == 0) {
      this.af.list('/devices/Roku/Channels')
        .subscribe(
          res => {
            res.forEach(
              (val, index) => {
                this.RokuChannels.push(val.$key);
                this.RokuChannelsAndStatus.push({name: val.$key, status: val.$value});
              }
            )
          }
        )
      }

        if (this.AppleTvChannels.length == 0) {
          this.af.list('/devices/Apple TV/Channels')
          .subscribe(
            res => {
                res.forEach(
                  (val, index) => {
                      this.AppleTvChannels.push(val.$key);
                      this.AppleTvChannelsAndStatus.push({name: val.$key, status: val.$value});
                  }
                )
            }
          )
        }


    // }
    console.log(this.AppleTvChannels);
    AllChannels = this.RokuChannels.concat(this.AppleTvChannels);

    // remove duplicates from array
    AllChannels = AllChannels.filter(function(item, pos) {
      return AllChannels.indexOf(item) == pos;
    })
    return AllChannels;
  }


  getRokuChannels() {
    return this.RokuChannelsAndStatus;
  }

  getAppleTvChannels() {
    return this.AppleTvChannelsAndStatus;
  }










  getChannel(id: string) {
    return this.af.object('/channels/' + id);
  }

  addChannel(channel: Channel) {
    return this.http.post(FIREBASE_URL + 'channels.json', channel)
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err);
      });
  }

  updateChannel(_id: string, channelToEdit: Channel) {
    return this.http.patch(FIREBASE_URL + 'channels/' + _id + '.json', channelToEdit)
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err);
      });
  }

  deleteChannel(_id: string) {
    return this.http.delete(FIREBASE_URL + 'channels/' + _id + '.json')
    .map(res => res.json())
    .catch(err => {
      return Observable.throw(err);
    });
  }






}

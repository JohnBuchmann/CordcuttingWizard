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

  channelsSubject = new Subject<Channel[]>();

  test = [];

  constructor(
      private http: Http,
      private af: AngularFireDatabase ) {}


  getAllChannels() {
      let channels = [];
      this.af.list('/device_channels/', {
        preserveSnapshot: true
      }
      )
      .do((snapshots) => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
            channels.push(snapshot.key);
        });

        // this.downloaded = true;
      })
      .subscribe();

      return channels;
  }


  getDeviceChannels(device) {
      let channels = [];
      this.af.list('/devices/' + device + '/Channels')
        .subscribe(
          res => {
            res.forEach(
              (val, index) => {
                channels.push({name: val.$key, status: val.$value});
              }
            )
          }
        )
      return channels;
  }


  getAllFeatures() {
    let DeviceFeatures = [];
    if (DeviceFeatures.length == 0) {
    this.af.list('/device_features')
      .subscribe(
        (res) => {
          res.forEach(
            (val, index) => {
              DeviceFeatures.push({key: val.$key, status: val.$value})
            }
          )
        }
      )
    }
    return DeviceFeatures;
  }


 getDeviceFeatures(device) {
  let features = [];
  this.af.list('/devices/' + device + '/Features')
  .subscribe(
    (res) => {
      res.forEach(
        (val, index) => {
          features.push({key: val.$key, status: val.$value})
        }
      )
    }
  )
   return features;
  }


  // getRokuChannels() {
  //   return this.RokuChannelsAndStatus;
  // }

  // getAppleTvChannels() {
  //   return this.AppleTvChannelsAndStatus;
  // }










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

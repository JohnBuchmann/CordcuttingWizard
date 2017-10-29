import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Channel } from '../models/channel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import { FIREBASE_URL } from '../config/config';

@Injectable()
export class ServicesService {

  allChannels: Channel[] = [];
  downloaded = false;

  channelsSubject = new Subject<Channel[]>();

  constructor(
      private http: Http,
      private af: AngularFireDatabase ) {}

  getAllChannels() {
    return this.allChannels;
  }

  downloadChannels() {
    if (!this.downloaded) {
      const channels: Channel[] = [];
      this.af.list('/channels', {
        preserveSnapshot: true,
        query: {
          orderByChild: 'name'
        }
      }
      )
      .do((snapshots) => {
        snapshots.forEach(snapshot => {
          channels.push(new Channel(snapshot.val().name, snapshot.val().image, snapshot.val().devices, snapshot.key));
        });
        this.downloaded = true;
      })
      .subscribe();

      this.allChannels = channels;

    }
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

  aaa() {
    this.channelsSubject.next(this.allChannels);
  }




}

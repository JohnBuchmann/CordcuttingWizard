import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EmailService {

  constructor(private http: Http) {}

  public sendEmail(msg: string){
    console.log("send");
    const headers = new Headers({
        'Content-Type' : 'application/json'
    });

   return this.http.post("https://formspree.io/jsbuchmann@gmail.com",
        {
            name: 'Report an Error',
            // replyto: 'jsbuchmann@gmail.com',
            message: msg
        },
        {
            'headers' : headers
        }
    )
      .map(res => res.json())
      .catch((err) => (Observable.throw(err)))
    }

}

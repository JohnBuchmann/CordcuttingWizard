import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class EmailService {

  constructor(private http: Http) {}

  sendEmail() {
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = {
      'firstName': 'John',
      'lastName': 'Buchmann'
    };
    this.http.post('http://informatik.com/testing/email.php', body)
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }

}

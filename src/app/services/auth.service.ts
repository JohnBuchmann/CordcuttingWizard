import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Rx';
// import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  isLoggedIn$ = new Subject<boolean>();

  constructor(private afAuth: AngularFireAuth,
              private route: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        () => {
          this.isLoggedIn$.next(true);
          this.route.navigate(['/']);
        }
      )
      .catch(
        (err) => console.log(err)
      );
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(
        () => {
          this.isLoggedIn$.next(false);
          this.route.navigate(['/']);
        }
      );
  }

}

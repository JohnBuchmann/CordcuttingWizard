import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn$
      .subscribe(
        (res) => {
          this.isLoggedIn = res;
        }
      );

  }

  logOut() {
    this.authService.logout();
  }

}

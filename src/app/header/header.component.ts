import { AuthService } from '../services/auth.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarIsHidden = true;
  navbarHasBackground = false;

  isNavbarCollapsed = true;
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn$
      .subscribe(
        (res) => {
          this.isLoggedIn = res;
        }
      );


      window.addEventListener("scroll", this.scrollFunction);
    }


    @HostListener('window:scroll')
    scrollFunction() {
      let top: number = window.scrollY;
      if (top > 200) {
        this.navbarIsHidden = false;
      } else {
        this.navbarIsHidden = true;
      }

      if (top > 30) {
        this.navbarHasBackground = true;
      } else {
        this.navbarHasBackground = false;
      }

    }

}

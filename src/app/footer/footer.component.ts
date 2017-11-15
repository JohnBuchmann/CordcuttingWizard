import { Component, OnInit } from '@angular/core';
import { ShareButton, ShareProvider } from 'ngx-sharebuttons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  fbButton: ShareButton;

  constructor() { }

  ngOnInit() {


  }


}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  @Input() device;
  @Input() deviceLogo;
  @Input() deviceName;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-results',
  templateUrl: './device-results.component.html',
  styleUrls: ['./device-results.component.css']
})
export class DeviceResultsComponent implements OnInit {
  @Input() itemsArray;
  // @Input() deviceLogo;
  @Input() deviceName;

  constructor() { }

  ngOnInit() {
  }

}
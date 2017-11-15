import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-results',
  templateUrl: './service-results.component.html',
  styleUrls: ['./service-results.component.scss']
})
export class ServiceResultsComponent implements OnInit {

  @Input() device;
  @Input() deviceLogo;
  @Input() deviceName;

  constructor() { }

  ngOnInit() {
  }

}

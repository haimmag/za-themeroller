import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  @Input() textColor = '#fff';
  @Input() riskColor = "#ff8b19";
  @Input() safeColor = "#7AB53D";

  constructor() { }

  ngOnInit() {
  }

}

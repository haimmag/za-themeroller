import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-risk-page',
  templateUrl: './risk-page.component.html',
  styleUrls: ['./risk-page.component.scss']
})
export class RiskPageComponent implements OnInit {

  @Input() textColor = '#fff';
  @Input() riskColor = "#ff8b19";

  constructor() { }

  ngOnInit() {
  }

}

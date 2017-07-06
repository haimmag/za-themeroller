import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-risk-page',
  templateUrl: './risk-page.component.html',
  styleUrls: ['./risk-page.component.scss']
})
export class RiskPageComponent implements OnInit {

  @Input() textColor = '#fff';
  @Input() riskColor = "#ff8b19";
  @Input() actionBarColor = "#19191B";
  @Input() logo = "/assets/images/transparentZa.png";
  @Input() deviceIcon = "/assets/za/deviceIcon.png";
  @Input() appsIcon = "/assets/za/appsIcon.png";
  @Input() networkIcon = "/assets/za/networkIcon.png";

  constructor() { }

  ngOnInit() {
  }

}

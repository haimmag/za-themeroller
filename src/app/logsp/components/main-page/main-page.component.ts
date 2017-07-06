import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() textColor = '#fff';
  @Input() analyzingColor = '#f94675';
  @Input() actionBarColor = "#19191B";
  @Input() logo = "/assets/images/transparentZa.png";

  constructor() { }

  ngOnInit() {
  }

}

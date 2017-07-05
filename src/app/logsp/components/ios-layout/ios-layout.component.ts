import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ios-layout',
  templateUrl: './ios-layout.component.html',
  styleUrls: ['./ios-layout.component.scss']
})
export class IosLayoutComponent implements OnInit {

  @Input() backgroundColor = '#fff';
  @Input() textColor = '#fff';

  constructor() { }

  ngOnInit() {
  }

}

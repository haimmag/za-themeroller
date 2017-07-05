import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-android-layout',
  templateUrl: './android-layout.component.html',
  styleUrls: ['./android-layout.component.scss']
})
export class AndroidLayoutComponent implements OnInit {

  @Input() backgroundColor = '#fff';
  @Input() textColor = '#fff';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService } from '@covalent/core';

import { ItemsService, ProductsService } from '../../services';

@Component({
  selector: 'qs-logsp',
  templateUrl: './logsp.component.html',
  styleUrls: ['./logsp.component.scss'],
  viewProviders: [ ItemsService, ProductsService ],
})
export class LogspComponent implements AfterViewInit, OnInit {

  mobile_preview = 'ios';
  bgColor: string = '#127bdc';
  textColor: string = '#fff';
  color: string = '#fff';

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

}

import { Component, AfterViewInit, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService, TdDialogService } from '@covalent/core';

import { ItemsService, ProductsService } from '../../services';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
import { GenerateComponent } from './components/generate/generate.component';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

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

  dialogRef:MdDialogRef<GenerateComponent>;

  constructor(private _titleService:Title,
              private _itemsService:ItemsService,
              private _productsService:ProductsService,
              private _loadingService:TdLoadingService,
              private _changeDetectorRef:ChangeDetectorRef,
              public media:TdMediaService,
              private _dialogService:TdDialogService,
              private _viewContainerRef: ViewContainerRef) {

  }

  ngOnInit():void {

  }

  doGenerate():void {

    this.dialogRef = this._dialogService.open(GenerateComponent, {width: '600px'});
    this.dialogRef.componentInstance.dialogRef = this.dialogRef;
    this.dialogRef.afterClosed().subscribe((newValue:Object) => {
      debugger;
      if (newValue != 'cancel') {
        debugger;
      }
    })
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

}

import { Component, AfterViewInit, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService, TdDialogService } from '@covalent/core';

import { ItemsService, ProductsService } from '../../services';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
import { GenerateComponent } from './components/generate/generate.component';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { TdFileService, IUploadOptions } from '@covalent/core';

@Component({
  selector: 'qs-logsp',
  templateUrl: './logsp.component.html',
  styleUrls: ['./logsp.component.scss'],
  viewProviders: [ ItemsService, ProductsService ],
  providers: [ TdFileService ],
})
export class LogspComponent implements AfterViewInit, OnInit {

  mobile_preview = 'ios';
  bgColor: string = '#1a1a1a';
  textColor: string = '#fff';
  threatColor: string = "#CC2436";
  riskColor: string = "#ff8b19";
  safeColor: string ="#7AB53D";
  analyzingColor: string ="#f94675";
  color: string = '#fff';

  dialogRef:MdDialogRef<GenerateComponent>;

  constructor(private _titleService:Title,
              private _itemsService:ItemsService,
              private _productsService:ProductsService,
              private _loadingService:TdLoadingService,
              private _changeDetectorRef:ChangeDetectorRef,
              public media:TdMediaService,
              private _dialogService:TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private fileUploadService: TdFileService) {

  }

  ngOnInit():void {

  }

  doGenerate():void {

    this.dialogRef = this._dialogService.open(GenerateComponent, {width: '600px'});
    this.dialogRef.componentInstance.dialogRef = this.dialogRef;
    this.dialogRef.afterClosed().subscribe((newValue:Object) => {
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

  selectEvent(file: File): void {
  }

  uploadEvent(file: File): void {
    //debugger;
    let options: IUploadOptions = {
      url: '/uploadfile?filename='+file.name,
      method: 'post',
      file: file,
    };
    this.fileUploadService.upload(options).subscribe((response) => {
      //debugger;
    });
  }

  cancelEvent(): void {
  }

}

import { Component, AfterViewInit, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService, TdDialogService } from '@covalent/core';

import { ItemsService, ProductsService } from '../../services';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
import { GenerateComponent } from './components/generate/generate.component';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { TdFileService, IUploadOptions } from '@covalent/core';
import { DataService } from '../../services/data.service';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'qs-logsp',
  templateUrl: './logsp.component.html',
  styleUrls: ['./logsp.component.scss'],
  viewProviders: [ ItemsService, ProductsService ],
  providers: [ TdFileService ],
})
export class LogspComponent implements AfterViewInit, OnInit {

  mobile_preview = 'ios';
  bgColor: string = '#127bdc';
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
              private fileUploadService: TdFileService,
              private dataService: DataService,
              private _http: Http) {
  }

  ngOnInit():void {

  }

  doGenerate():void {
    this.dialogRef = this._dialogService.open(GenerateComponent, {width: '600px'});
    this.dialogRef.componentInstance.dialogRef = this.dialogRef;
    this.dialogRef.afterClosed().subscribe((newValue:Object) => {
      if (newValue != 'cancel') {
        newValue['threatColor'] = this.threatColor;
        newValue['riskColor'] = this.riskColor;
        newValue['safeColor'] = this.safeColor;
        newValue['analyzingColor'] = this.analyzingColor;
        newValue['mainBacgkroundColor'] = this.bgColor;
        newValue['mainTextColor'] = this.textColor;
        newValue['rowTextColor'] = this.textColor;
        newValue['rowBackground'] = this.bgColor;
        newValue['circlesOrRectangles'] = 'circles';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this._http.post('/uploadSettings', JSON.stringify(newValue), options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error')).subscribe();
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

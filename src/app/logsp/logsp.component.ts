import {Component, AfterViewInit, OnInit, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import {Title}     from '@angular/platform-browser';

import {TdLoadingService, TdMediaService, TdDialogService} from '@covalent/core';

import {ItemsService, ProductsService} from '../../services';
import {ITdDynamicElementConfig, TdDynamicElement, TdDynamicType} from '@covalent/dynamic-forms';
import {GenerateComponent} from './components/generate/generate.component';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import {TdFileService, IUploadOptions} from '@covalent/core';

@Component({
  selector: 'qs-logsp',
  templateUrl: './logsp.component.html',
  styleUrls: ['./logsp.component.scss'],
  viewProviders: [ItemsService, ProductsService],
  providers: [TdFileService],
})
export class LogspComponent implements AfterViewInit, OnInit {

  mobile_preview = 'ios';
  bgColor: string = '#1a1a1a';
  textColor: string = '#fff';
  threatColor: string = "#CC2436";
  riskColor: string = "#ff8b19";
  safeColor: string = "#7AB53D";
  analyzingColor: string = "#f94675";
  color: string = '#fff';
  actionBarColor: string = "#19191B";
  srcLogo = '/assets/images/transparentZa.png';
  deviceIcon = '/assets/za/deviceIcon.png';
  appsIcon = '/assets/za/appsIcon.png';
  networkIcon = '/assets/za/networkIcon.png';
  rowBackground: string = "#323232";
  rowTextColor: string =  "#ffffff";

  orig: any = {};

  dialogRef: MdDialogRef<GenerateComponent>;

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService,
              private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private fileUploadService: TdFileService) {

  }

  ngOnInit(): void {

  }

  doGenerate(): void {

    this.dialogRef = this._dialogService.open(GenerateComponent, {width: '600px'});
    this.dialogRef.componentInstance.dialogRef = this.dialogRef;
    this.dialogRef.afterClosed().subscribe((newValue: Object) => {
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

  selectEvent(file: File, name): void {
    this.readURL(file, name);
  }

  uploadEvent(file: File): void {
    //debugger;
    let options: IUploadOptions = {
      url: '/uploadfile?filename=' + file.name,
      method: 'post',
      file: file,
    };
    this.fileUploadService.upload(options).subscribe((response) => {
      //debugger;
    });
  }

  cancelEvent(name): void {
    if (name == 'icon.png') {
      this.srcLogo = this.orig.srcLogo;
      this.orig.srcLogo = undefined;
    }
    if (name == 'deviceIcon.png') {
      this.deviceIcon = this.orig.deviceIcon;
      this.orig.deviceIcon = undefined;
    }
    if (name == 'appsIcon.png') {
      this.appsIcon = this.orig.appsIcon;
      this.orig.appsIcon = undefined;
    }
    if (name == 'networkIcon.png') {
      this.networkIcon = this.orig.networkIcon;
      this.orig.networkIcon = undefined;
    }
  }

  readURL(file, name) {
    let reader = new FileReader();
    let vm = this;

    reader.onload = function (e: any) {
      if (name == 'icon.png') {
        vm.orig.srcLogo = vm.srcLogo;
        vm.srcLogo = e.target.result;
      }
      if (name == 'deviceIcon.png') {
        vm.orig.deviceIcon = vm.deviceIcon;
        vm.deviceIcon = e.target.result;
      }
      if (name == 'appsIcon.png') {
        vm.orig.appsIcon = vm.appsIcon;
        vm.appsIcon = e.target.result;
      }
      if (name == 'networkIcon.png') {
        vm.orig.networkIcon = vm.networkIcon;
        vm.networkIcon = e.target.result;
      }

    }

    reader.readAsDataURL(file);
  }

}

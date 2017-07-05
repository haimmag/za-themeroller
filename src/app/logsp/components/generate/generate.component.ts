import { Component, OnInit } from '@angular/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'generate-page',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  dialogRef:MdDialogRef<GenerateComponent>;

  constructor() { }

  ngOnInit() {
  }

  doCancel(){
    this.dialogRef.close('cancel');
  }

  doGenerate(frm){
    this.dialogRef.close(frm.value);
  }

  elements: ITdDynamicElementConfig[] = [
   {
    name: 'appType',
    label: 'Type',
    type: TdDynamicElement.Select,
    required: true,
    selections: ['All', 'Android', 'iOS'],
    default: 'All',
  },{
    name: 'vendor',
    label: 'Vendor',
    type: TdDynamicType.Text,
    required: true,
    default: 'Cellcom',
  }, {
    name: 'pkgName',
    label: 'Package Name',
    type: TdDynamicType.Text,
    required: true,
    default: 'com.cellcom.mobilesecurity',
  }, {
    name: 'shortAppName',
    label: 'Short App Name',
    type: TdDynamicType.Text,
    required: true,
    default: 'Mobile Security',
  }, {
    name: 'appName',
    label: 'App Name',
    type: TdDynamicType.Text,
    required: true,
    default: 'Cellcom Mobile Security',
  }, {
    name: 'fcm',
    label: 'Push Messages Key',
    type: TdDynamicType.Text,
    required: true,
    default: '',
  }, {
    name: 'email',
    label: 'Recipient email address',
    type: TdDynamicType.Text,
    required: true,
    default: '',
  }];
}

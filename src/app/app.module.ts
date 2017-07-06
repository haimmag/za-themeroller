import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';

import { routedComponents, AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { USER_PROVIDER, USERS_API } from './users';
import {ColorPickerModule} from 'ngx-color-picker';
import { IosLayoutComponent } from './logsp/components/ios-layout/ios-layout.component';
import { AndroidLayoutComponent } from './logsp/components/android-layout/android-layout.component';
import { MainPageComponent } from './logsp/components/main-page/main-page.component';
import { MdRadioModule } from '@angular/material';
import { RiskPageComponent } from './logsp/components/risk-page/risk-page.component';
import { InfoPageComponent } from './logsp/components/info-page/info-page.component';
import { GenerateComponent } from './logsp/components/generate/generate.component';
import { CovalentDialogsModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentFileModule } from '@covalent/core';
import { DataService } from '../services/data.service';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    IosLayoutComponent,
    AndroidLayoutComponent,
    MainPageComponent,
    GenerateComponent,
    RiskPageComponent,
    InfoPageComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    ColorPickerModule,
    MdRadioModule,
    CovalentDialogsModule,
    CovalentDynamicFormsModule,
    CovalentFileModule,
  ], // modules needed to run this module
  providers: [
    httpInterceptorProviders,
    DataService,
    Title, {
      provide: USERS_API, useFactory: getAPI,
    }, USER_PROVIDER,
  ], // additional providers needed for this module
  entryComponents: [
    GenerateComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

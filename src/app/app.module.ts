import { CovalentDialogsModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { RiskPageComponent } from './logsp/components/risk-page/risk-page.component';

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
    CovalentDynamicFormsModule
  ], // modules needed to run this module
  providers: [
    httpInterceptorProviders,
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

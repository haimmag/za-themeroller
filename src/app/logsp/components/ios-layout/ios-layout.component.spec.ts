import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosLayoutComponent } from './ios-layout.component';

describe('IosLayoutComponent', () => {
  let component: IosLayoutComponent;
  let fixture: ComponentFixture<IosLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

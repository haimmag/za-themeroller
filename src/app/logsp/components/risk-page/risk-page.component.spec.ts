import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPageComponent } from './risk-page.component';

describe('RiskPageComponent', () => {
  let component: RiskPageComponent;
  let fixture: ComponentFixture<RiskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempModuleComponent } from './temp-module.component';

describe('TempModuleComponent', () => {
  let component: TempModuleComponent;
  let fixture: ComponentFixture<TempModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

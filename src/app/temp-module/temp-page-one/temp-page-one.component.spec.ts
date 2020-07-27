import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPageOneComponent } from './temp-page-one.component';

describe('TempPageOneComponent', () => {
  let component: TempPageOneComponent;
  let fixture: ComponentFixture<TempPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TempPageTwoComponent } from './temp-page-two.component';

describe('TempPageTwoComponent', () => {
  let component: TempPageTwoComponent;
  let fixture: ComponentFixture<TempPageTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

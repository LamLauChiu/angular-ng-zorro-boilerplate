import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableTemplateMultiSortComponent } from './table-template-multi-sort.component';

describe('TableTemplateMultiSortComponent', () => {
  let component: TableTemplateMultiSortComponent;
  let fixture: ComponentFixture<TableTemplateMultiSortComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplateMultiSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplateMultiSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';

import { TableTemplateMultiSortRoutingModule } from './table-template-multi-sort-routing.module';

import { TableTemplateMultiSortComponent } from './table-template-multi-sort.component';

import { NgZorroAntdModule } from "../../ng-zorro-antd.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    TableTemplateMultiSortRoutingModule,
    NgZorroAntdModule,
    CommonModule,FormsModule
    
  ],
  declarations: [TableTemplateMultiSortComponent],
  exports: [TableTemplateMultiSortComponent]
})
export class TableTemplateMultiSortModule { }

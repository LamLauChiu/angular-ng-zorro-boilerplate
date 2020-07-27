import { NgModule } from '@angular/core';

import { TableTemplateRoutingModule } from './table-template-routing.module';

import { TableTemplateComponent } from './table-template.component';

import { NgZorroAntdModule } from "../../ng-zorro-antd.module";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    TableTemplateRoutingModule,
    NgZorroAntdModule,
    CommonModule
    
  ],
  declarations: [TableTemplateComponent],
  exports: [TableTemplateComponent]
})
export class TableTemplateModule { }

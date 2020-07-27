import { NgModule } from '@angular/core';

import { TempModuleRoutingModule } from './temp-module-routing.module';

import { TempModuleComponent } from './temp-module.component';
import { TempPageOneComponent } from './temp-page-one/temp-page-one.component';
import { TempPageTwoComponent } from './temp-page-two/temp-page-two.component';


@NgModule({
  imports: [TempModuleRoutingModule],
  declarations: [TempModuleComponent, TempPageOneComponent, TempPageTwoComponent],
  exports: [TempModuleComponent]
})
export class TempModuleModule { }

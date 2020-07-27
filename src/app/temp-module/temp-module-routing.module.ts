import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TempModuleComponent } from './temp-module.component';
import { TempPageOneComponent } from "./temp-page-one/temp-page-one.component";
import { TempPageTwoComponent } from "./temp-page-two/temp-page-two.component";

const routes: Routes = [
  { path: '', component: TempModuleComponent },
  { path: 'tempPageOne', component: TempPageOneComponent },
  { path: 'tempPageTwo', component: TempPageTwoComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class TempModuleRoutingModule { }

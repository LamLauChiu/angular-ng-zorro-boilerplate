import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTemplateComponent } from './table-template.component';

const routes: Routes = [
  { path: '', component: TableTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTemplateRoutingModule { }

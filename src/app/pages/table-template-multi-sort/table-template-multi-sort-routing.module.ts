import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTemplateMultiSortComponent } from './table-template-multi-sort.component';

const routes: Routes = [
  { path: '', component: TableTemplateMultiSortComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTemplateMultiSortRoutingModule { }

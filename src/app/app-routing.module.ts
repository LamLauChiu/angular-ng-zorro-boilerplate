import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'table-template', loadChildren: () => import('./pages/table-template/table-template.module').then(m => m.TableTemplateModule) },
  { path: 'table-template-multi-sort', loadChildren: () => import('./pages/table-template-multi-sort/table-template-multi-sort-routing.module').then(m => m.TableTemplateMultiSortRoutingModule) },
  { path: 'temp', loadChildren: () => import('./temp-module/temp-module.module').then(m => m.TempModuleModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CmsLayoutComponent } from './cms-layout.component';
const routes: Routes = [
  { path: '', component: CmsLayoutComponent  ,
  children: [
    { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'table-template', loadChildren: () => import('../pages/table-template/table-template.module').then(m => m.TableTemplateModule) },
    { path: 'table-template-multi-sort', loadChildren: () => import('../pages/table-template-multi-sort/table-template-multi-sort-routing.module').then(m => m.TableTemplateMultiSortRoutingModule) },
    { path: 'temp', loadChildren: () => import('../temp-module/temp-module.module').then(m => m.TempModuleModule) },
    { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModuleModule) },
  ]},
  //{ path: 'welcome', component: CmsLayoutComponent },
  
// { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
// { path: 'dashboard/table-template', loadChildren: () => import('../pages/table-template/table-template.module').then(m => m.TableTemplateModule) },
// { path: 'table-template-multi-sort', loadChildren: () => import('../pages/table-template-multi-sort/table-template-multi-sort-routing.module').then(m => m.TableTemplateMultiSortRoutingModule) },
// { path: 'temp', loadChildren: () => import('../temp-module/temp-module.module').then(m => m.TempModuleModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class CmsLayoutRoutingModule { }

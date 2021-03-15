import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsLayoutComponent } from './cms-layout/cms-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  //{ path:'' , component: CmsLayoutComponent } 
  //{ path:'' , component: CmsLayoutComponent, loadChildren:() => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)  }
  { path:'dashboard', loadChildren:() => import('./cms-layout/cms-layout.module').then(m => m.CmsLayoutModule)},

  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'table-template', loadChildren: () => import('./pages/table-template/table-template.module').then(m => m.TableTemplateModule) },
  // { path: 'table-template-multi-sort', loadChildren: () => import('./pages/table-template-multi-sort/table-template-multi-sort-routing.module').then(m => m.TableTemplateMultiSortRoutingModule) },
  // { path: 'temp', loadChildren: () => import('./temp-module/temp-module.module').then(m => m.TempModuleModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

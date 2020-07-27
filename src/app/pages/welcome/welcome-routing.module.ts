import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }

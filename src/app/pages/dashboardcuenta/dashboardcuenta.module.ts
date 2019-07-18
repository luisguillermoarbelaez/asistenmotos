import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardcuentaPage } from './dashboardcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardcuentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardcuentaPage]
})
export class DashboardcuentaPageModule {}

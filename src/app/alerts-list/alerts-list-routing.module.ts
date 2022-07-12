import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsListPage } from './alerts-list.page';

const routes: Routes = [
  {
    path: '',
    component: AlertsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertsListPageRoutingModule {}

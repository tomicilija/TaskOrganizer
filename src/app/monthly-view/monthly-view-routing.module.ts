import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyViewPage } from './monthly-view.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyViewPageRoutingModule {}

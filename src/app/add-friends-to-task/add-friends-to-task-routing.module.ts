import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFriendsToTaskPage } from './add-friends-to-task.page';

const routes: Routes = [
  {
    path: '',
    component: AddFriendsToTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFriendsToTaskPageRoutingModule {}

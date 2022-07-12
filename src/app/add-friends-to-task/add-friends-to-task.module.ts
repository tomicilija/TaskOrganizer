import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFriendsToTaskPageRoutingModule } from './add-friends-to-task-routing.module';

import { AddFriendsToTaskPage } from './add-friends-to-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFriendsToTaskPageRoutingModule
  ],
  declarations: [AddFriendsToTaskPage]
})
export class AddFriendsToTaskPageModule {}

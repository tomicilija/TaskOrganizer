import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsListPageRoutingModule } from './alerts-list-routing.module';

import { AlertsListPage } from './alerts-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertsListPageRoutingModule
  ],
  declarations: [AlertsListPage]
})
export class AlertsListPageModule {}

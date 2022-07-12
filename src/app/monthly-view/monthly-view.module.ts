import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyViewPageRoutingModule } from './monthly-view-routing.module';

import { MonthlyViewPage } from './monthly-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyViewPageRoutingModule
  ],
  declarations: [MonthlyViewPage]
})
export class MonthlyViewPageModule {}

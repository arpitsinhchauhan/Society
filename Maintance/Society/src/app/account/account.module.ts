import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    

  ],

  imports: [
    CommonModule,
    AccountRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AccountModule { }

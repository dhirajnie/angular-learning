import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    CustomerComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ]
})
export class CustomerDashboardModule {

}

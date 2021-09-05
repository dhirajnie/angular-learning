import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{
  path: '', component: CustomerComponent,

},
{ path: 'address/:id', component: AddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }

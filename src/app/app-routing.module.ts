import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JusticeNetworkComponent } from './justice-network/justice-network.component';
import { NetworkMetricesComponent } from './network-metrices/network-metrices.component';


const routes: Routes = [
  {path:"",component:JusticeNetworkComponent},
  {path:"networkMetrice", component:NetworkMetricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

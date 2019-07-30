
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { WizardsComponent } from "./wizards/wizards.component";


export const routes:Routes = [
  {
    path: 'wizards',
    component: WizardsComponent,
    //loadChildren: './wizards/wizards.module#WizardsModule',
    data: {pageTitle: 'Wizards'}
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {pageTitle: 'Proizvodi'}
  }
];

export const routing = RouterModule.forChild(routes);

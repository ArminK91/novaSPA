import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module'

import {AnalyticsRoutingModule} from './analytics-routing.module';
import {AnalyticsComponent} from './analytics.component';

import {FlotChartModule} from "@app/shared/graphs/flot-chart/flot-chart.module";
import {D3Module} from "@app/shared/graphs/d3/d3.module";
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { FormsShowcaseModule } from '../forms/forms-showcase.module';


@NgModule({
  imports: [
    SharedModule,
    AnalyticsRoutingModule,
    FlotChartModule,
    D3Module,
    ECommerceModule,
    FormsShowcaseModule
  ],
  declarations: [
    AnalyticsComponent,
  ],
  exports: [AnalyticsComponent],
  providers: [],
})
export class AnalyticsModule {

}

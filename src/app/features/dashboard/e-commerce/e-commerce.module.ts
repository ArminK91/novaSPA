import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {routing} from "./e-commerce.routing";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CarouselModule} from "ngx-bootstrap";
import { SmartadminLayoutModule } from '@app/shared/layout';
import { SmartadminWidgetsModule } from '@app/shared/widgets/smartadmin-widgets.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { PitanjaComponent } from '../pitanja/pitanja.component';

@NgModule({
  imports: [
    CommonModule,

    routing,

    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    SmartadminDatatableModule,
    CarouselModule,

  ],
  declarations: [
    ShoppingCartComponent,
    ProductsViewComponent, ProductDetailsComponent, PitanjaComponent
  ],
  exports: [
    ProductsViewComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    PitanjaComponent
  ]
})
export class ECommerceModule { }

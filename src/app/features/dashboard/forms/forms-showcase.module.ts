import {NgModule} from "@angular/core";

import {routing} from "./forms-showcase.routing";
import { OrdersComponent } from "./orders/orders.component";
import { SmartadminLayoutModule } from "@app/shared/layout/layout.module";
import { SmartadminWidgetsModule } from "@app/shared/widgets/smartadmin-widgets.module";
import { SmartadminDatatableModule } from "@app/shared/ui/datatable/smartadmin-datatable.module";
import { WizardsComponent } from "./wizards/wizards.component";
import { BasicWizardWidgetComponent } from "./wizards/basic-wizard-widget.component";
import { SharedModule } from "@app/shared/shared.module";
import { SmartadminWizardsModule } from "@app/shared/forms/wizards/smartadmin-wizards.module";
import { CommonModule } from "@angular/common";
import { UploadComponent } from './wizards/upload/upload.component';
import { SlikeComponent } from './wizards/slike/slike.component';
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    OrdersComponent,
    WizardsComponent, 
    BasicWizardWidgetComponent, 
    UploadComponent, SlikeComponent
  ],
  imports: [
    routing,
    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    SmartadminDatatableModule,
    SharedModule,
    SmartadminWizardsModule,
    CommonModule,
    FileUploadModule,
  ],
  providers: [],
  entryComponents: [],
  exports: [WizardsComponent,
    BasicWizardWidgetComponent,
    UploadComponent]
})
export class FormsShowcaseModule {}


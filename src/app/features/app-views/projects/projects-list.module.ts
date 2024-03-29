import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsListRoutingModule} from './projects-list-routing.module';
import {ProjectsListComponent} from './projects-list.component';
import { SmartadminLayoutModule } from '@app/shared/layout';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminWidgetsModule } from '@app/shared/widgets/smartadmin-widgets.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsListRoutingModule,
    SmartadminLayoutModule,
    SmartadminDatatableModule,

    SmartadminWidgetsModule,
  ],
  declarations: [ProjectsListComponent]
})
export class ProjectsListModule {
}

import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing} from './dashboard.routing';
import { SharedModule } from '@app/shared/shared.module';
import { PitanjaComponent } from './pitanja/pitanja.component';


@NgModule({
  imports: [
    SharedModule,
    routing,
    FormsModule
  ],
  declarations: [],
  providers: [],
})
export class DashboardModule {

}

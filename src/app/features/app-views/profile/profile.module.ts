import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import { SmartadminLayoutModule } from '@app/shared/layout';

@NgModule({
  imports: [
    CommonModule,
    SmartadminLayoutModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {
}

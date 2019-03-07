import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/auth/login/login.module';
import { RegisterModule } from './features/auth/register/register.module';
import { AnalyticsModule } from './features/dashboard/analytics/analytics.module';
import { SmartadminLayoutModule } from './shared/layout';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    ReactiveFormsModule,
    AnalyticsModule,
    SmartadminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

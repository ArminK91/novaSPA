import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/auth/login/login.module';
import { RegisterModule } from './features/auth/register/register.module';
import { AnalyticsModule } from './features/dashboard/analytics/analytics.module';
import { SmartadminLayoutModule } from './shared/layout';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

export function tokenGetter() {
  return localStorage.getItem("token");
}

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
    SmartadminLayoutModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        //tokenGetter: tokenGetter,
        whitelistedDomains: ["http://localhost:54058"]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

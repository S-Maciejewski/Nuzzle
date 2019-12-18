import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';


import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppointmentsViewComponent } from './views/appointments-view/appointments-view.component';
import { AppointmentItemComponent } from './views/appointments-view/appointment-item/appointment-item.component';
import { AppointmentDetailsComponent } from './views/appointments-view/appointment-details/appointment-details.component';
import { MyAppointmentsViewComponent } from './views/my-appointments-view/my-appointments-view.component';
import { NewAppointmentComponent } from './views/my-appointments-view/new-appointment/new-appointment.component';
import { LoginProxyComponent } from './views/login-view/login-proxy/login-proxy.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedAppointmentComponent } from './views/selected-appointment/selected-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    LoginViewComponent,
    LoginProxyComponent,
    AppointmentsViewComponent,
    AppointmentItemComponent,
    AppointmentDetailsComponent,
    MyAppointmentsViewComponent,
    NewAppointmentComponent,
    SelectedAppointmentComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NgShadowModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIDataFormModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainViewComponent } from './views/main-view/main-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppointmentsViewComponent } from './views/appointments-view/appointments-view.component';
import { AppointmentDetailsComponent } from './views/appointments-view/appointment-details/appointment-details.component';
import { SelectedAppointmentComponent } from './views/selected-appointment/selected-appointment.component';

import { MyAppointmentsViewComponent } from './views/my-appointments-view/my-appointments-view.component'
import { NewAppointmentComponent } from './views/my-appointments-view/new-appointment/new-appointment.component'
import { LoginProxyComponent } from './views/login-view/login-proxy/login-proxy.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-proxy', pathMatch: 'full' },
  { path: 'main', component: MainViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'login-proxy', component: LoginProxyComponent },
  { path: 'appointments', component: AppointmentsViewComponent },
  { path: 'appointment-details', component: AppointmentDetailsComponent },
  { path: 'my-appointments', component: MyAppointmentsViewComponent },
  { path: 'new-appointment', component: NewAppointmentComponent },
  { path: 'selected-appointment', component: SelectedAppointmentComponent },


];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainViewComponent } from './views/main-view/main-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppointmentsViewComponent } from './views/appointments-view/appointments-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/appointments', pathMatch: 'full' },
  { path: 'main', component: MainViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'appointments', component: AppointmentsViewComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }

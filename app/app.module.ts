import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';


import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppointmentsViewComponent } from './views/appointments-view/appointments-view.component';
import { AppointmentItemComponent } from './views/appointments-view/appointment-item/appointment-item.component';
import { AppointmentDetailsComponent } from './views/appointments-view/appointment-details/appointment-details.component';

@NgModule({
  declarations: [
      AppComponent,
      MainViewComponent,
      LoginViewComponent,
      AppointmentsViewComponent,
      AppointmentItemComponent,
      AppointmentDetailsComponent,
  ],
  imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptFormsModule,
      NativeScriptHttpClientModule,
      NativeScriptUISideDrawerModule,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}


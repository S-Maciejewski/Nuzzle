import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { DrawerService } from './services/drawer.service';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './interfaces/User';
import { ApiService } from './services/api.service';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(RadSideDrawerComponent, { static: false }) drawerComponent: RadSideDrawerComponent;
  drawer: RadSideDrawer;
  drawerSubscription: Subscription;
  user: User;

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private drawerService: DrawerService,
    private auth: AuthService,
    private api: ApiService) {
    this.page.actionBarHidden = true;
    this.drawerSubscription = this.drawerService.drawerStateChange.subscribe(() => {
      this.drawer.showDrawer();
    });
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.auth.getLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.drawer.gesturesEnabled = false;
        this.user = undefined;
      } else {
        this.drawer.gesturesEnabled = true;
        this.api.getCurrentUser().subscribe(data => {
          this.user = data[0];
          console.log('Current user:', this.user);
        });
      }
    });
    this._changeDetectionRef.detectChanges();
  }

  onAppointmentsTap() {
    this.drawer.toggleDrawerState();
    this.routerExtensions.navigateByUrl('/appointments')
  }

  onMyAppointmentsTap() {
    this.drawer.toggleDrawerState();
    this.routerExtensions.navigateByUrl('/my-appointments')
  }

  onMessagesTap() {
    this.drawer.toggleDrawerState();
    this.routerExtensions.navigateByUrl('/messages')
  }

  onLogout() {
    this.auth.logout();
    this.drawer.toggleDrawerState();
    this.routerExtensions.navigateByUrl('/login');
  }
}

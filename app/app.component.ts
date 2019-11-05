import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { DrawerService } from './services/drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(RadSideDrawerComponent, { static: false }) drawerComponent: RadSideDrawerComponent;
  drawer: RadSideDrawer;
  drawerSubscription: Subscription;

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private drawerService: DrawerService,
  ) {
    this.page.actionBarHidden = true;
    this.drawerSubscription = this.drawerService.drawerStateChange.subscribe(state => {
      console.log('drawer opened?')
      if (state) {
        this.drawer.showDrawer();
      }
    });
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  openDrawer() {
    this.drawer.showDrawer();
  }

  onCloseDrawerTap() {
    this.drawerService.toggleDrawerState();
  }
}

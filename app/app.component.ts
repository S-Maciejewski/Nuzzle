import { Component } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  drawerTransition: DrawerTransitionBase;

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page) {
    this.page.actionBarHidden = true;
    this.drawerTransition = new SlideInOnTopTransition();
  }
}

import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { RouterExtensions } from 'nativescript-angular/router';
import { ApiService } from '../../services/api.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { OfferItem } from '../../interfaces/Offer';
import { DrawerService } from '../../services/drawer.service';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab,
);

@Component({
  selector: 'app-my-appointments-view',
  templateUrl: './my-appointments-view.component.html',
  styleUrls: ['./my-appointments-view.component.scss'],
})
export class MyAppointmentsViewComponent implements OnInit {
  offerItems: OfferItem[];

  constructor(
    private routerExtensions: RouterExtensions,
    private drawerService: DrawerService,
    private api: ApiService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }
  ngOnInit() {
    this.api.getMyOfferList().subscribe((data: OfferItem[]) => this.offerItems = data);
  }

  newAppointment() {
    this.routerExtensions.navigateByUrl('/new-appointment');
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) {
      this.drawerService.toggleDrawerState();
    }
  }
}

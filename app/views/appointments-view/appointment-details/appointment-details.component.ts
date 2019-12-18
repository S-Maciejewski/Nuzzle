import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../../interfaces/Offer';
import { StoreService } from '../../../services/store.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { DrawerService } from '../../../services/drawer.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit {
  item: OfferItem;
  myOffer: boolean;
  constructor(
    private store: StoreService,
    private drawerService: DrawerService,
    private authService: AuthService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.item = this.store.getTempStoreOfferItem();
    this.myOffer = this.store.getTempStoreMyOffer();
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) {
      this.drawerService.toggleDrawerState();
    }
  }
}

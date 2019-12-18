import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../interfaces/Offer';
import { StoreService } from '../../services/store.service';
import { DrawerService } from '../../services/drawer.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'app-selected-appointment',
  templateUrl: './selected-appointment.component.html',
  styleUrls: ['./selected-appointment.component.scss'],
})
export class SelectedAppointmentComponent implements OnInit {
  item: OfferItem;
  constructor(
    private store: StoreService,
    private drawerService: DrawerService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.item = this.store.getTempStoreOfferItem();
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) {
      this.drawerService.toggleDrawerState();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../interfaces/Offer';
import { ApiService } from '../../services/api.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.scss'],
})
export class AppointmentsViewComponent implements OnInit {
  offerItems: OfferItem[];

  constructor(
    private api: ApiService,
    private drawerService: DrawerService,
    private page: Page) {
      this.page.actionBarHidden = true;
      api.getOfferList().subscribe((data: OfferItem[]) => this.offerItems = data);
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) {
      this.drawerService.toggleDrawerState();
    }
  }
}

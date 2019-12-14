import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../../interfaces/OfferItem';
import { StoreService } from '../../../services/store.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit {
  item: OfferItem;
  constructor(
    private store: StoreService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.item = this.store.getTempStoreOfferItem();
  }
}

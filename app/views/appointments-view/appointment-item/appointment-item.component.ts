import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { OfferItem } from '../../../interfaces/Offer';
import { StoreService } from '../../../services/store.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss']
})
export class AppointmentItemComponent implements OnInit {
  @Input() item: OfferItem;
  @Input() myOffer: boolean;

  constructor(
    private routerExtensions: RouterExtensions,
    private store: StoreService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    console.log(this.myOffer)
  }

  showAppointmentDetails() {
    this.store.setTempStoreOfferItem(this.item);
    this.store.setTempStoreMyOffer(this.myOffer);
    this.routerExtensions.navigateByUrl('/appointment-details');
  }
}

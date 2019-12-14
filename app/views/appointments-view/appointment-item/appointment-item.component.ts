import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { OfferItem } from '../../../interfaces/OfferItem';
import { StoreService } from '../../../services/store.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss']
})
export class AppointmentItemComponent implements OnInit {
  @Input() item: OfferItem;

  constructor(
    private routerExtensions: RouterExtensions,
    private store: StoreService,
    private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() { }

  showAppointmentDetails() {
    this.store.setTempStoreOfferItem(this.item);
    this.routerExtensions.navigateByUrl('/appointment-details');
  }
}

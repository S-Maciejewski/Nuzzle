import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../interfaces/Offer';
import { ApiService } from '../../services/api.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.scss'],
})
export class AppointmentsViewComponent implements OnInit {
  offerItems: OfferItem[];

  constructor(
    private api: ApiService,
    private page: Page) {
      this.page.actionBarHidden = true;
      api.getOfferList().subscribe((data: OfferItem[]) => this.offerItems = data);
  }

  ngOnInit() {
  }
}

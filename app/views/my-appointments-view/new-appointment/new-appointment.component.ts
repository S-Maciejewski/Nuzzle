import { Component, OnInit } from '@angular/core';
import { OfferTypes, NewOfferItem } from '../../../interfaces/Offer';
import { ApiService } from '../../../services/api.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { Address } from '../../../interfaces/Address';
import { Authorization } from '../../../interfaces/authentication';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent implements OnInit {
  offer1 = {
    TypeID: null,
    Type: null,
    Label: null,
    AddressID: null,
    Address: null,
  };

  offer2 = {
    Description: null,
    ImageURL: null,
    Price: null,
    Date: null,
  };

  addressForm = {
    Address: null,
    Label: null,
    LongitudePos: 0.0,
    LatitudePos: 0.0,
  };

  offerTypes: OfferTypes[];
  types: any;

  myAddresses: Address[];
  addressesLabels: string[];

  showNewAddressForm: boolean = false;
  addAddressLabel: string = 'Dodaj adres';

  constructor(
    private api: ApiService,
    private page: Page) {
      this.page.actionBarHidden = true;
      api.getOfferTypes().subscribe((data: OfferTypes[]) => {
        this.offerTypes = data;
        this.types = data.map(offerType => offerType.Type);
      });
      api.getMyAddresses().subscribe((data: Address[]) => {
        this.myAddresses = data;
        this.addressesLabels = data.map(addr => addr.Label);
      });
  }

  ngOnInit() { }

  commitOffer() {
    this.offer1.TypeID = this.offerTypes.filter(offerType => offerType.Type === this.offer1.Type)[0].ID;
    this.offer1.AddressID = this.myAddresses.filter((address) => address.Label === this.offer1.Address)[0].ID;

    const totalOffer = Object.assign({}, this.offer1, this.offer2);
    console.log(totalOffer);
    this.api.postOffer(totalOffer).subscribe((data) => {
      console.log(data);
    });
  }

  addAddress() {
    this.showNewAddressForm = !this.showNewAddressForm;
  }

  confirmAddingAddress() {
    this.showNewAddressForm = !this.showNewAddressForm;
    this.api.postAddress(this.addressForm).subscribe((data: Authorization) => {
      console.log(data); // TODO response validation
      if (data.success) {
        this.api.getMyAddresses().subscribe((data1: Address[]) => {
          this.myAddresses = data1;
          this.addressesLabels = data1.map(addr => addr.Label);
          this.addressForm.Address = '';
          this.addressForm.Label = '';
        });
      }
    });
    console.log('ADD ADDRESS');
  }
}

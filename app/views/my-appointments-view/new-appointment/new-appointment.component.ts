import { Component, OnInit } from '@angular/core';
import { OfferTypes, NewOfferItem } from '../../../interfaces/Offer';
import { ApiService } from '../../../services/api.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { Address } from '../../../interfaces/Address';
import { Authorization } from '../../../interfaces/authentication';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {
  offer1 = {
    TypeID: null,
    Type: null,
    Label: null,
    AddressID: null,
    Address: null,
  }

  offer2 = {
    Description: null,
    ImageURL: null,
    Price: null,
    Date: null,
  }

  addressForm = {
    Address: null,
    Label: null,
    LongitudePos: 0.0,
    LatitudePos: 0.0
  }

  offerTypes: OfferTypes[];
  types: any;

  myAddresses: Address[];
  addressesLabels: string[];

  showNewAddressForm: boolean = false;
  addAddressLabel: string = "Dodaj adres"

  offerMetadata = {
    isReadOnly: false,
    commitMode: "Immediate",
    validationMode: "Immediate",
    propertyAnnotations:
    [
      {
        name: "ImageURL",
        index: 1,
        ignore: true
      },
      {
        name: "Label",
        displayName: "Tytuł",
        index: 2,
        required: true
      },
      {
        name: "Type",
        displayName: "Typ ogłoszenia",
        index: 3,
        editor: "Picker",
        valuesProvider: null
      },
      {
        name: "Address",
        displayName: "Adres ogłoszenia",
        index: 4,
        editor: "Picker",
        valuesProvider: null
      },
      {
        name: "Date",
        displayName: "Data",
        index: 5,
        editor: "DatePicker"
      },
      {
        name: "Description",
        displayName: "Opis",
        editor: "MultilineText",
        index: 6,
        required: true
      },
      {
        name: "Price",
        displayName: "Cena",
        index: 7,
        required: true,
        editor: "Decimal"
      },
      {
        name: "TypeID",
        ignore: true
      },
      {
        name: "AddressID",
        ignore: true
      }
    ]
  }

  constructor(
    private api: ApiService,
    private page: Page) {
      this.page.actionBarHidden = true;
      api.getOfferTypes().subscribe((data: OfferTypes[]) => { 
        this.offerTypes = data;
        this.types = data.map(offerType => offerType.Type)
        // this.offerMetadata.propertyAnnotations.filter(obj => obj.name === "Type")[0].valuesProvider = this.types
      })
      api.getMyAddresses().subscribe((data: Address[]) => { 
        this.myAddresses = data;
        this.addressesLabels = data.map(addr => addr.Label)
        // this.offerMetadata.propertyAnnotations.filter(obj => obj.name === "Address")[0].valuesProvider = this.addressesLabels
      })
  }

  ngOnInit() {}

  commitOffer() {
    this.offer1.TypeID = this.offerTypes.filter((offer) => offer.Type === this.offer1.Type)[0].ID
    this.offer1.AddressID = this.myAddresses.filter((address) => address.Label === this.offer1.Address)[0].ID

    let offer = Object.assign({}, this.offer1, this.offer2)
    console.log(offer)
    this.api.postOffer(offer).subscribe((data) => {
      console.log(data)
    })
  }

  addAddress() {
    this.showNewAddressForm = !this.showNewAddressForm;
  }

  confirmAddingAddress() {
    this.showNewAddressForm = !this.showNewAddressForm;
    this.api.postAddress(this.addressForm).subscribe((data: Authorization) => {
      console.log(data) //TODO response validation
      if (data.success) {
        this.api.getMyAddresses().subscribe((data1: Address[]) => { 
          this.myAddresses = data1;
          this.addressesLabels = data1.map(addr => addr.Label)
          this.addressForm.Address=""
          this.addressForm.Label=""
        })
      }
    })
    console.log("ADD ADDRESS")
  }
}

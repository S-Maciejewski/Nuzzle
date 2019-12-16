import { Injectable } from '@angular/core';
import * as appSettings from 'tns-core-modules/application-settings';
import { OfferItem } from '../interfaces/Offer';

const keys = {
  token: 'token',
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // Storing items should be implemented as rxjs Action -> Effect store if we proceed to production
  offerItem: OfferItem;

  constructor() {
  }

  setToken(token: string) {
    appSettings.setString(keys.token, token);
  }

  removeToken() {
    appSettings.remove(keys.token);
  }

  getToken() {
    return appSettings.getString(keys.token);
  }

  setTempStoreOfferItem(item: OfferItem) {
    this.offerItem = item;
  }

  getTempStoreOfferItem() {
    return this.offerItem;
  }
}

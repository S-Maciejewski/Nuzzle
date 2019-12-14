import { Injectable } from '@angular/core';
import * as appSettings from 'tns-core-modules/application-settings';

const keys = {
  token: 'token',
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {

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
}

import { Injectable } from '@angular/core';
import * as appSettings from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  constructor() { 
    console.log(appSettings.hasKey('token'));

    // appSettings.setString('token', 'testToken');

    console.log(appSettings.getString('token'));
  }
}

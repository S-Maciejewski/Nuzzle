import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {

  drawerStateChange: Subject<any> = new Subject<any>();

  drawerStateOpened = false;

  constructor() { }

  toggleDrawerState() {
    console.log('drawer state change')
    this.drawerStateOpened = !this.drawerStateOpened;
    this.drawerStateChange.next(this.drawerStateOpened);
  }
}

import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { DrawerService } from '../../services/drawer.service';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {

  constructor(
    private page: Page,
    private drawerService: DrawerService,
  ) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  openDrawer() {
    this.drawerService.toggleDrawerState();
  }

  closeDrawer() {
    this.drawerService.toggleDrawerState();
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) {
      this.drawerService.toggleDrawerState();
    }
  }

}

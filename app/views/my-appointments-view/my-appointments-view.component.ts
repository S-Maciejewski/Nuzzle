import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { RouterExtensions } from "nativescript-angular/router";

registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

@Component({
  selector: 'app-my-appointments-view',
  templateUrl: './my-appointments-view.component.html',
  styleUrls: ['./my-appointments-view.component.scss']
})
export class MyAppointmentsViewComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  newAppointment() {
    this.routerExtensions.navigateByUrl("/new-appointment");
  }
  

}

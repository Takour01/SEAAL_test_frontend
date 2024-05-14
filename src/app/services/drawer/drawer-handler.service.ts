// drawer.service.ts
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Injectable({
  providedIn: 'root'
})
export class DrawerHandlerService {
  private drawer!: MatDrawer;

  setDrawerInstance(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}

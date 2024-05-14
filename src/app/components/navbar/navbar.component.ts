import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DrawerHandlerService } from '../../services/drawer/drawer-handler.service';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
export interface Section {
  name: string;
  icon: string;
  link: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // other-component.ts
  constructor(private drawerService: DrawerHandlerService, private auth: AuthService, private router: Router,) { }




  openDrawer() {
    this.drawerService.openDrawer();
  }

  logout() {
    const role = this.auth.role
    this.auth.logout();
    this.router.navigate([`/login/${role}`])
  }

  backHome() {
    this.router.navigate(["/"])
  }

  navigateToPage(link: string) {
    this.router.navigate(['/' + link]);
  }


}




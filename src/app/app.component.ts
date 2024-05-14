import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly authService: AuthService, private route: ActivatedRoute) { }
  async getUser() {
    if (this.route.snapshot.url.length > 0) {
      const path = this.route.snapshot.url[0].path === "login" || this.route.snapshot.url[0].path === "register"
      if (!path)
        this.authService.getUser().subscribe({
          next: (res) => {
            console.log(res);
            if (res?.role) {
              this.authService.role = res.role
              this.authService.setLocalStogeRole(res.role)
            }

          }, error: (err) => {
            console.log(err);
            this.authService.logout()
          }
        })
    }

  }

  ngOnInit(): void {
    console.log(this.route.snapshot);

    this.getUser()
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { userRole } from '../../models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading: boolean = false

  constructor(private router: Router, private auth: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  })

  submitHandler() {
    const valid = this.loginForm.valid
    if (valid) {
      this.loading = true;
      console.log(this.loginForm.value);
      const role = "Manager"
      console.log(role);

      const data = { ...this.loginForm.value, role } as { username: string, password: string, role: userRole }
      this.auth.login(data).subscribe({
        next: (res) => {
          this.auth.setLocalStogeToken(res.access_token)
          this.auth.role = role
          this.auth.setLocalStogeRole(role)
          this.auth.token = res.access_token
          this.router.navigate(["/managers"])
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        }
      });
    }
    else {
      console.log(this.loginForm.get("username")?.getError("username"));
      console.log(this.loginForm.get("username")?.getError("required"));
      console.log(this.loginForm.get("password")?.getError("required"));
      console.log(this.loginForm.get("password")?.getError("minlength"));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { userRole } from '../../models/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading: boolean = false

  constructor(private router: Router, private auth: AuthService) { }

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })

  submitHandler() {
    const valid = this.registerForm.valid
    if (valid) {
      this.loading = true;
      console.log(this.registerForm.value);
      const role = "Manager"
      console.log(role);

      const data = { ...this.registerForm.value, role } as { username: string, password: string, role: userRole }
      this.auth.register(data).subscribe({
        next: (res) => {
          this.router.navigate([`login/${role}`])
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        }
      });
    }
    else {
      console.log(this.registerForm.get("username")?.getError("username"));
      console.log(this.registerForm.get("username")?.getError("required"));
      console.log(this.registerForm.get("password")?.getError("required"));
      console.log(this.registerForm.get("password")?.getError("minlength"));
    }
  }

}

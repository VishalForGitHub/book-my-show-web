import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../service/auth-service/auth.service';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visible = true;
  loginForm!: FormGroup; // ✅ FIXED — definite assignment, not possibly undefined

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSignIn(): void {
    // console.log('Form Value:', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: (res) => {
          console.log(res);
          localStorage.setItem('email', res.email);
          alert(res.message);
          this.dialogRef.close(res.status);
        },
        error: (err) => {
          alert(err.message);
        }
      }
    )
  }

  openSignUpPopup() {
    this.dialog.open(SignupComponent, {
    });
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}

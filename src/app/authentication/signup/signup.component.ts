import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<any>();
  visible = true;

  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>
  ) { 
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  control(name: string) {
    return this.signupForm.get(name)!;
  }

  onOverlayClick(e: MouseEvent) {
    // Close when clicking outside modal box
    this.close();
  }

  // close() {
  //   this.isOpen = false;
  //   this.closed.emit();
  // }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const value = this.signupForm.value;
    // emit the form value so parent can handle signup (e.g. call API)
    this.submitted.emit(value);
    // optionally close the modal
    this.close();
  }

  social(provider: string) {
    console.log('social login:', provider);
    // stub: wire up real social login here
  }

  openLogin() {
    // stub: if you have a login modal flow, trigger it here
    console.log('open login flow');
  }
  // visible = true;

  close() {
    this.dialogRef.close();
  }
}

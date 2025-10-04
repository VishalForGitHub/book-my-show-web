import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  visible = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}

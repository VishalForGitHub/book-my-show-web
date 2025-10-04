import { Component } from '@angular/core';
import { HomeMoviesListComponent } from '../../../movie-list/home-movies-list/home-movies-list.component';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../authentication/login/login.component';
@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,HomeMoviesListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(LoginComponent, {
      // width: '400px',  // optional width
    });
  }
}

import { Component, HostListener } from '@angular/core';
import { HomeMoviesListComponent } from '../../../movie-list/home-movies-list/home-movies-list.component';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../authentication/login/login.component';
import { SignupComponent } from '../../../authentication/signup/signup.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, HomeMoviesListComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) { }
  visible = true
  isDropdownOpen = false;
  isLoggedIn = false; // change to false initially if needed
  openLogInPopup() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });

    // 👇 Listen when the dialog closes
    dialogRef.afterClosed().subscribe(result => {
      console.log('Returned data:', result);
      if (result == '200') {
        this.isLoggedIn = true;
      }
    });
  }


  openSignUpPopup() {
    this.dialog.open(SignupComponent, {
    });
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Detect clicks outside and close dropdown
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.user-profile');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  logout() {
    // Your logout logic here
    this.isLoggedIn = false;
    this.isDropdownOpen = false;
  }
}

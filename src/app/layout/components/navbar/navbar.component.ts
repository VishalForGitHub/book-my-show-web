import { Component } from '@angular/core';
import { HomeMoviesListComponent } from '../../../movie-list/home-movies-list/home-movies-list.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,HomeMoviesListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

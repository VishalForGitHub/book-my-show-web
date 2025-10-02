import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { BookingComponent } from './movie-list/booking/booking.component';

export const routes: Routes = [
    { 
      path: '', component: NavbarComponent
    },
    { path: 'movie/:id', component: MovieDetailComponent },
    {path:'movie/booking/:id',component:BookingComponent}
];

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
interface Movie {
  title: string;
  genre: string;
  likes: string;
  rating: string;
  poster: string;
  certificate: string;
}

@Component({
  selector: 'app-home-movies-list',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './home-movies-list.component.html',
  styleUrl: './home-movies-list.component.css'
})
export class HomeMoviesListComponent {
movies = [
  {
    id: 1,
    title: 'Bayaan',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTIwMTRiNjEtNWQyNC00ZmU0LWFlZWItMWY4NjFkNzA0OWQ4XkEyXkFqcGc@._V1_.jpg',  // approximate; check wiki-page for exact
    genre: 'Police Procedural, Drama',
    certificate: 'Not Rated / Festival Release',
    duration: '1h 58m',
    language: 'Hindi',
    format: '2D',
    likes: 'N/A',
    rating: 'N/A',
    about: 'Roohi, a female detective, investigates a respected cult leader after an anonymous accusation of sexual abuse; she faces institutional resistance, reluctant witnesses, and her own doubts as power, gender, and silence clash.'  // based on synopsis :contentReference[oaicite:0]{index=0}
  },
  {
    id: 2,
    title: 'Baaghi 4',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2UyZDU3NDItZjhjYS00OTdmLWFmYzctZjViM2ZiZjA3OTk0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,280_.jpg',  // approximate; check “Baaghi 4” wiki / production house
    genre: 'Action, Thriller',
    certificate: 'A / Adults',
    duration: '2h 37m',  
    language: 'Hindi',
    format: '2D',
    likes: '200K+',   // speculative
    rating: 'A',
    about: 'Tiger Shroff returns as Ronnie in a darker, bloodier mission. With Sanjay Dutt as the antagonist, this fourth Baaghi promises high-octane action sequences, emotional clashes, and a more intense tone than predecessors. Directed by A. Harsha. :contentReference[oaicite:1]{index=1}'
  },
  {
    id: 3,
    title: 'Superman: Legacy',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5F7l8YqqmqGqhiiOXx_NwFvN8AlifC8rmUh17DbEdBRQ2oCqwWl0rOc&s',  // placeholder (poster yet to be published in final)
    genre: 'Superhero, Action',
    certificate: 'PG-13',
    duration: '2h 10m',
    language: 'English',
    format: 'IMAX / 2D',
    likes: '500K+',
    rating: 'PG-13',
    about: 'A new chapter in the Superman saga under James Gunn’s direction. With Clark Kent stepping into a fresh world full of moral dilemmas, cosmic threats, and the weight of his legacy, the film explores heroism, hope, and the cost of being a symbol. :contentReference[oaicite:2]{index=2}'
  },
  {
    id: 4,
    title: 'Mickey 17',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAMg0yH-9R1Jlcsuq0TcP_rHIuDB21Lqzm2Yuu-wL7Bt2WN2xMj3mqr0&s',  
    genre: 'Sci-Fi, Thriller',
    certificate: 'PG-13',
    duration: 'Approx. 2h 20m',
    language: 'English',
    format: '2D / IMAX',
    likes: '250K+',
    rating: 'PG-13',
    about: 'Adapted from Edward Ashton’s novel, this film follows an “expendable” worker sent to colonize a distant ice world. Upon each death, he is replaced by a clone. As his copies accumulate memories and desires, the ethical, existential and emotional stakes grow in unexpected ways. :contentReference[oaicite:3]{index=3}'
  },
  {
    id: 5,
    title: 'Snow White (2025 live-action)',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiedNwrEL9etdauo87T8okW_Z_hbMQkRr2g&s',
    genre: 'Musical, Fantasy, Family',
    certificate: 'PG',
    duration: 'Approx. 2h 15m',
    language: 'English',
    format: '2D / Family Friendly',
    likes: '300K+',
    rating: 'PG',
    about: 'A live-action reimagining of the classic fairy tale, with new songs and modern twists. The film offers a lush visual world, romance, comedy, and all the whimsy expected of the Snow White story, while updating character motivations and diversifying the setting. :contentReference[oaicite:4]{index=4}'
  },
  {
    id: 6,
    title: 'Jolly LLB 3',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Jolly_LLB_3_poster.jpg',
    genre: 'Comedy, Drama',
    certificate: 'UA16+',
    duration: '2h 37m',
    language: 'Hindi',
    format: '2D',
    likes: '124.6K',
    rating: 'UA16+',
    about: 'A courtroom drama with comedy elements and social message.'
  }
];

constructor(private router: Router) {}

goToDetails(id: number) {
  this.router.navigate(['/movie', id]);
}
}

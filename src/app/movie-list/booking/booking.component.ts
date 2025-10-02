import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface SeatConfig {
  rows: string[];
  seatsPerRow: number;
  vipRows: string[];
  gapAfter: number;
  occupiedSeats: string[];
  prices: {
    regular: number;
    vip: number;
  };
}
@Component({
  selector: 'app-booking',
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
  }
  seatConfig: SeatConfig = {
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    seatsPerRow: 10,
    vipRows: ['D', 'E', 'F'],
    gapAfter: 4,
    occupiedSeats: ['A2', 'A3', 'B5', 'C8', 'D3', 'E6', 'F1', 'G4', 'G5'],
    prices: {
      regular: 180,
      vip: 280
    }
  };

  movie: any
  selectedSeats: string[] = [];
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movies.find(m => m.id === id);
  }

  movies = [
    {
      id: 1,
      title: 'Bayaan',
      poster: 'https://m.media-amazon.com/images/M/MV5BYTIwMTRiNjEtNWQyNC00ZmU0LWFlZWItMWY4NjFkNzA0OWQ4XkEyXkFqcGc@._V1_.jpg',
      genre: 'Police Procedural, Drama',
      certificate: 'Not Rated / Festival Release',
      duration: '1h 58m',
      language: 'Hindi',
      format: '2D',
      likes: 'N/A',
      rating: 'N/A',
      about: 'Roohi, a female detective, investigates a respected cult leader after an anonymous accusation of sexual abuse; she faces institutional resistance, reluctant witnesses, and her own doubts as power, gender, and silence clash.',
      type: 'Drama / Crime Thriller'
    },
    {
      id: 2,
      title: 'Baaghi 4',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2UyZDU3NDItZjhjYS00OTdmLWFmYzctZjViM2ZiZjA3OTk0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,280_.jpg',
      genre: 'Action, Thriller',
      certificate: 'A / Adults',
      duration: '2h 37m',
      language: 'Hindi',
      format: '2D',
      likes: '200K+',
      rating: 'A',
      about: 'Tiger Shroff returns as Ronnie in a darker, bloodier mission. With Sanjay Dutt as the antagonist, this fourth Baaghi promises high-octane action sequences, emotional clashes, and a more intense tone than predecessors. Directed by A. Harsha.',
      type: 'Action / Thriller'
    },
    {
      id: 3,
      title: 'Superman: Legacy',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5F7l8YqqmqGqhiiOXx_NwFvN8AlifC8rmUh17DbEdBRQ2oCqwWl0rOc&s',
      genre: 'Superhero, Action',
      certificate: 'PG-13',
      duration: '2h 10m',
      language: 'English',
      format: 'IMAX / 2D',
      likes: '500K+',
      rating: 'PG-13',
      about: 'A new chapter in the Superman saga under James Gunn’s direction. With Clark Kent stepping into a fresh world full of moral dilemmas, cosmic threats, and the weight of his legacy, the film explores heroism, hope, and the cost of being a symbol.',
      type: 'Superhero / Action / Adventure'
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
      about: 'Adapted from Edward Ashton’s novel, this film follows an “expendable” worker sent to colonize a distant ice world. Upon each death, he is replaced by a clone. As his copies accumulate memories and desires, the ethical, existential and emotional stakes grow in unexpected ways.',
      type: 'Science Fiction / Thriller'
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
      about: 'A live-action reimagining of the classic fairy tale, with new songs and modern twists. The film offers a lush visual world, romance, comedy, and all the whimsy expected of the Snow White story, while updating character motivations and diversifying the setting.',
      type: 'Fantasy / Musical / Family'
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
      about: 'A courtroom drama with comedy elements and social message.',
      type: 'Comedy / Courtroom Drama'
    }
  ];

  isOccupied(seatId: string): boolean {
    return this.seatConfig.occupiedSeats.includes(seatId);
  }

  isVIP(row: string): boolean {
    return this.seatConfig.vipRows.includes(row);
  }

  isSelected(seatId: string): boolean {
    return this.selectedSeats.includes(seatId);
  }

  toggleSeat(seatId: string, row: string): void {
    if (this.isOccupied(seatId)) return;

    if (this.isSelected(seatId)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seatId);
    } else {
      this.selectedSeats.push(seatId);
    }
  }

  get regularSeatsCount(): number {
    return this.selectedSeats.filter(seat => !this.isVIP(seat.charAt(0))).length;
  }

  get vipSeatsCount(): number {
    return this.selectedSeats.filter(seat => this.isVIP(seat.charAt(0))).length;
  }

  get regularTotal(): number {
    return this.regularSeatsCount * this.seatConfig.prices.regular;
  }

  get vipTotal(): number {
    return this.vipSeatsCount * this.seatConfig.prices.vip;
  }

  get totalAmount(): number {
    return this.regularTotal + this.vipTotal;
  }

  bookSeats(): void {
    if (this.selectedSeats.length === 0) return;

    alert(
      `Booking confirmed for seats: ${this.selectedSeats.join(', ')}\nTotal Amount: ₹${this.totalAmount}`
    );

    // Mark selected seats as occupied
    this.seatConfig.occupiedSeats.push(...this.selectedSeats);

    // Reset
    this.selectedSeats = [];
  }

  goBack() {
    this.location.back();
  }
}

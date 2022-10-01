import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieListStore } from './moviej-list.store';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [CommonModule],
  providers: [ MovieListStore ]
})
export class MovieListComponent implements OnInit {
  store: MovieListStore;

  constructor() { 
    this.store = inject(MovieListStore);
    console.log(this.store);
  }

  ngOnInit(): void {
  }

  addMovie() {
    this.store.addMovie();
  }
}

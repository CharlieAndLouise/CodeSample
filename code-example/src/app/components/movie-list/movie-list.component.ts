import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieListStore } from './movie-list.store';

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
    // Create the store for the component
    this.store = inject(MovieListStore);
  }

  ngOnInit(): void {
  }

  addMovie() {
    // When a change is triggered, call the pre-defined method to modify the store. 
    // (ACTION in Redux)
    this.store.addMovie();
  }
}

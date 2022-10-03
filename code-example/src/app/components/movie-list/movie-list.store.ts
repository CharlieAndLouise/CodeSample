import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface Movie {
  id: number;
  name: string;
  price: number; 
}

export interface MovieListState {
  movies: Movie[];
  selectedMovieId: number | null;
}

@Injectable()
export class MovieListStore extends ComponentStore<MovieListState> {

  private lastMovieId = 0;

  constructor() {
    super({
      movies: [], selectedMovieId: null
    })
  }

  readonly movies$ = this.select(state => state.movies);
  // Create promise for view to consume.
  readonly selectedMovie = this.select(state => {
    return state.movies.find(m => m.id === state.selectedMovieId);
  });

  addMovie = () => {
    this.setState(state => {
      this.lastMovieId++;
      state.movies = [ ...state.movies, 
        { id: this.lastMovieId, name: 'Star War ' + this.lastMovieId, price: this.lastMovieId  } ];
      //console.log(state.movies.length);
      return state;
    });
  }

}
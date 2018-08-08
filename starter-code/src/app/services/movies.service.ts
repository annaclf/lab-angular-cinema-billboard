import { Injectable } from '@angular/core';
import movieList from './sample-movies';

@Injectable()
export class MoviesService {

  moovies = movieList;

  constructor() { }

  getMovies(){
    return this.moovies;
  }
  getMovie(id){
    return this.moovies = this.moovies.filter( movie => { movie.id !== id });
  }
    //this.router.navigate(['/movies', this.movie.id]);
}

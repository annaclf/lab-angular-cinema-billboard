import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  id: number;
  movie: Object;

  constructor( 
    private movieService : MoviesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params) => { 
      this.id = params.id;
      this.movie = this.movieService.getMovie(this.id);
    });
  }
}

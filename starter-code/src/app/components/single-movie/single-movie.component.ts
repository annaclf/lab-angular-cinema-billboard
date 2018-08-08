import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  id: number;

  constructor( 
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => { 
      this.id = params.id;
    })
  }
}

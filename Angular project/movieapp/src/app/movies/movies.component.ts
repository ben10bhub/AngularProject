import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../shared/movie-detail.service';
import { MovieDetails } from '../shared/movie-detail.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieDetailsService]
})
export class Moviescomponent implements OnInit {
  selectedMovie: MovieDetails;

  constructor(public movieservice:MovieDetailsService) { }

  ngOnInit(){
    this.movieservice.movieSelected.subscribe((movie:MovieDetails) => {
      this.selectedMovie = movie;
    });

    
  }

  

}

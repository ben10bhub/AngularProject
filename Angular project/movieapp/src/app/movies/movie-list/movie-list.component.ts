import { Component, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/movie-detail.model';

import { Observable } from 'rxjs';
import { MovieDetailsService } from 'src/app/shared/movie-detail.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: MovieDetails[];
  allMovies: Observable<MovieDetails[]>;  
  movieList: MovieDetails[];
  constructor(private movieservice:MovieDetailsService) { }

  ngOnInit() {
    this.loadallMovies();

  }
  loadallMovies() {
  this.movieservice.getMovies().subscribe(movies => this.movieList = movies);
  console.log(this.movieList,"MovieList");
}
}

import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../shared/movie-detail.model';
import { MovieDetailsService } from '../shared/movie-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service:MovieDetailsService) { }
  MovieList:MovieDetails[];

  ngOnInit(): void {
    this.refreshMovieList();
  }

  refreshMovieList(){
    this.service.getMovies().subscribe(data => this.MovieList = data)
    console.log(this.MovieList);
  }
  }



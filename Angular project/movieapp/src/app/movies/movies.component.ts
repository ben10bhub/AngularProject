import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../shared/movie-detail.service';
import { MovieDetails } from '../shared/movie-detail.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class Moviescomponent implements OnInit {

  constructor(public service:MovieDetailsService) { }
 MovieList:MovieDetails[];
  ngOnInit(){
    this.refreshMovieList();

    
  }
refreshMovieList(){
  this.service.getMovies().subscribe(data => this.MovieList = data)
  console.log(this.MovieList)
}
  

}

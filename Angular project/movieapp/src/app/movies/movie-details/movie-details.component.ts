import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(public service :MovieDetailsService) { }

  ngOnInit(): void {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/movie-detail.model';
import { MovieDetailsService } from 'src/app/shared/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie:MovieDetails;

  constructor(private movieservice:MovieDetailsService) { }

  ngOnInit() {
  }

}

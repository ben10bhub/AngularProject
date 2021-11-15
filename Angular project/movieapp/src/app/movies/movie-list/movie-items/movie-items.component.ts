import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieDetailsService } from 'src/app/shared/movie-detail.service';
import { MovieDetails } from 'src/app/shared/movie-detail.model';
@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.css']
})
export class MovieItemsComponent implements OnInit {
  @Input() movie:MovieDetails;


  constructor(private movieservice:MovieDetailsService) { }

  ngOnInit(){
    console.log(this.movie);
  }
  onSelected(){
    console.log("clicked 1");
      console.log(this.movie);
      this.movieservice.movieSelected.emit(this.movie);
console.log(this.movieservice.movieSelected)
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  movies: [];

  ngOnInit(): void {this.httpService.get('http://localhost:52202/api/employee').subscribe(  
    data => {  
     this.movies= data as  [];  
  }

}

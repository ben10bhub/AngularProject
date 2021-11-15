import { Injectable } from '@angular/core';
import { MovieDetails } from './movie-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  movieSelected = new EventEmitter<MovieDetails>();

  constructor(private http: HttpClient) { }
  readonly baseURL='https://localhost:44363/api/movies'

  getMovies():Observable<MovieDetails[]>{
    return this.http.get<MovieDetails[]>(this.baseURL);
 


  }
  
}

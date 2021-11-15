import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoginComponent } from './people/login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthenticationService } from './shared/authentication.service';
import { Moviescomponent } from './movies/movies.component';
import { MovieDetailsService } from './shared/movie-detail.service';
import { PeopleComponent } from './people/people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import '@angular/compiler';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

import { MovieItemsComponent } from './movies/movie-list/movie-items/movie-items.component';
import { MovieDetailsComponent } from './movies/movie-detail/movie-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Moviescomponent,
    LoginComponent,
    PeopleComponent,
    MovieListComponent,
  MovieDetailsComponent,
    MovieItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule
  
  ],
  providers: [HttpClient,MovieDetailsService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

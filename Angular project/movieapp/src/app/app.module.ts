import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { Moviescomponent } from './movies/movies.component';
import { MovieDetailsService } from './shared/movie-detail.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Moviescomponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [HttpClient,MovieDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieItemComponent } from './movies/movie-list/movie-item.component';
import { MovieListComponent } from './movies/movie-list/movie-item/movie-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

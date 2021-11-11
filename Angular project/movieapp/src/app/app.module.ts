import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoginComponent } from './people/login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthenticationService } from './shared/authentication.service';
import { AuthorizationCheckService } from './shared/authorization-check.service';
import { Moviescomponent } from './movies/movies.component';
import { MovieDetailsService } from './shared/movie-detail.service';
import { PeopleComponent } from './people/people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Moviescomponent,
    LoginComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
  
  ],
  providers: [HttpClient,MovieDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

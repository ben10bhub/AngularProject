import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Moviescomponent } from './movies/movies.component';

const routes: Routes = [ 

  {path: 'home', component:HomeComponent},
  {path:'movie',component:Moviescomponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





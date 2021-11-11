
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './people/login/login.component';
import { PeopleComponent } from './people/people.component';
import { Moviescomponent } from './movies/movies.component';


export const appRoutes: Routes=[
{path: 'movies',component:Moviescomponent},
  {path:'login',component:PeopleComponent,
  children:[{path:'',component:LoginComponent}]},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];





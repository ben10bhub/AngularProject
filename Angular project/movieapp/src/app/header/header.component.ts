import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  isLogin=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/header');
    this.isLogin=true ;
    
  }

}

import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    EmailAddress: '',
    Password: ''
  }

  constructor(
    
    private router: Router,
    private service: AuthenticationService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('');
}
onSubmit(form: NgForm) {
  this.service.login(form.value).subscribe(
    (res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('');
    },
    err => {
    
        console.log(err);
    } );
}
}
  
 
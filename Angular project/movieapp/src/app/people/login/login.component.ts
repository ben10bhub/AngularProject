import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 submitClick = false;
 submitted = false;
 returnUrl: string;
 error = '';


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    emailid: ['', Validators.required],
    password: ['', Validators.required]
    });
  
  this.authenticationService.logout();
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }
 get formData() { return this.loginForm.controls; }


  onLogin() {
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.loginForm.invalid) {
    return;
    }
   
    this.submitClick = true;
    this.authenticationService.login(this.formData.emailid.value, this.formData.password.value)
    .pipe(first())
    .subscribe(
    data => {
    this.router.navigate([this.returnUrl]);
    },
    error => {
    this.error = error;
    this.submitClick = false;
    });
    }
   }



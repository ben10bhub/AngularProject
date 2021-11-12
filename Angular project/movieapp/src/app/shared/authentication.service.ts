import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

import {Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  readonly baseURL="https://localhost:44363/api/accounts"

  login(formData: any) {
    return this.http.post(this.baseURL + '/login', formData);
  }
}

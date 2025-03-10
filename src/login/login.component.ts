import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatCardActions,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {
    if (UserService.getActiveUser()) {
      router.navigate(['/user']);
      return;
    }
  }

  public doLogin() {
    if (UserService.login(this.email, this.password)) {
      this.router.navigate(['/user']);
      return;
    }

    alert('Incorrect email or password!');
  }

  // public updateEmail(e: any) {
  //   this.email = e.target.value
  // }
  //
  // public updatePassword(e: any) {
  //   this.password = e.target.value
  // }
  //



}

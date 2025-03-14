import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
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
    FormsModule,
    RouterLink,
    MatAnchor,
    MatFormFieldModule,
    MatInputModule,
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

}

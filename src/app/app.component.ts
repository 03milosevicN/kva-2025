import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbar, MatAnchor, MatButton, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public service = UserService;

  constructor(private router: Router) {}

  public doLogout(): void {
    localStorage.removeItem('active');
    this.router.navigate(['/login']);
  }



}

import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { User } from '../login/model/User';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class HeaderComponent implements OnInit {
  user!: User;
  name: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(typeof window !== 'undefined') {
      if(this.auth.getUser()) {
        this.user = this.auth.getUser();
      }
    }
  }

  sair() {
    this.isLoading = true;
    if(typeof window !== "undefined") {
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
      setTimeout(() => location.reload(), 1)
      this.isLoading = false;
    }
  }

}

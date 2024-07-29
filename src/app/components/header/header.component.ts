import { AuthService } from './../services/auth/auth.service';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { User } from '../login/model/User';
import { Router, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class HeaderComponent implements OnInit, DoCheck {
  user!: User;
  name: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.user = this.auth.getUserLocal();
  }

  sair() {
    this.isLoading = true;
    if(typeof window !== "undefined") {
     this.auth.removeUserLocal();
      if(!this.auth.usuarioAutenticado()) {
        this.router.navigate(['/login'])
      }
      //setTimeout(() => location.reload(), 1)
      this.isLoading = false;
    }
  }

}

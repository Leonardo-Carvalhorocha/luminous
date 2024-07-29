import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './components/services/auth/auth.service';
import { User } from './components/login/model/User';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
],
})
export class AppComponent {
  title = 'luminous';
  user!: User;

  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {
  }
}

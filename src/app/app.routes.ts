import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/modules/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: 'full' },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
];

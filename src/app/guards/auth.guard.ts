/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../components/services/auth/auth.service';
import { User } from '../components/login/model/User';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  valid: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (typeof window !== 'undefined') {
    //   this.authService.hasValidAccessToken().subscribe((token) => {
    //     switch(token?.data?.['status']) {
    //       case 200:
    //         this.valid = true;
    //         break;
    //       case 403:
    //         this.valid = false;
    //         break;
    //       default:
    //         this.valid = false;
    //     }
    //   });
    // }

    if(this.authService.usuarioAutenticado()) return true;
    this.router.navigate(['/login']);
    return false
  }
}


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environment/environment';
import { catchError, Observable, pipe, tap } from 'rxjs';
import { UtilService } from '../util/util.service';
import { User } from '../../login/model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  API_URL: string = environment.token;

constructor(
  private httpClient: HttpClient,
  private utilService: UtilService,
  private router: Router
) {}

  ngOnInit() {}

  GET_TOKEN_USER(login: any,  loadingState: { isLoading: boolean }){
    const url = `${environment.token}`
    loadingState.isLoading = true; //
    return this.httpClient.post<any>(url, login).pipe(
      tap((user: User) => {
        this.setUserLocal(user);
        if(user && this.usuarioAutenticado(user.token)) {
          this.router.navigate(["/home"]);
        }
        loadingState.isLoading = false;
      }),
      catchError((): any => {
        this.utilService.handleMsgError('O úsuario está incorreto.');
        loadingState.isLoading = false;
      })
      );
  }

  hasValidAccessToken(token?: string): Observable<any> {
    const url = `${environment.token}/validate`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getUserLocal().token || token}`,
      'Content-Type': 'application/json' // Adicione se o servidor espera JSON
    });

    return this.httpClient.post<any>(`${url}`, {}, { headers })
  }

  getUserLocal(): User {
    if(typeof window !== 'undefined') {
      const user: any = window.localStorage.getItem('user');
      const userObject: User = JSON.parse(user);
      return userObject;
    }
    return new User();
  }

  removeUserLocal(): User {
    if(typeof window !== 'undefined') {
      window.localStorage.removeItem('user');
    }
    return new User();
  }

  setUserLocal(user: User) {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }

  usuarioAutenticado(token?: string) {
    const localStorageToken = this.getUserLocal();
    if (token) {
      return token
    } else if (localStorageToken) {
      return localStorageToken;
    } else {
      return '';
    }
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environment/environment';
import { catchError, Observable } from 'rxjs';
import { UtilService } from '../util/util.service';
import { User } from '../../login/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  API_URL: string = environment.token;

constructor(
  private httpClient: HttpClient,
  private utilService: UtilService,
) {}

  ngOnInit() {}

  GET_TOKEN_USER(login: any): Observable<any> {
    const url = `${environment.token}`
    return this.httpClient.post<any>(url, login).pipe(
      catchError((): any => {
        this.utilService.handleMsgError('O úsuario está incorreto.');
      })
      );
  }

  hasValidAccessToken() {
    const url = `${environment.token}/validate`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getUser().token}`,
      'Content-Type': 'application/json' // Adicione se o servidor espera JSON
    });

    return this.httpClient.post<any>(`${url}`, {}, { headers })
  }

  getUser(): User {
    if(typeof window !== 'undefined') {
      const user: any = window.localStorage.getItem('user');
      const userObject: User = JSON.parse(user);
      return userObject;
    }
    return new User();
  }

}

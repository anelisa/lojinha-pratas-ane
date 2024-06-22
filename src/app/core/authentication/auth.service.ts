import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string|null = null
  public isAuth: boolean = false;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post('http://localhost:3000/login', {email: user.email, password: user.password})
      .pipe(
        tap((res) => {
          //@ts-ignore
          this.authToken = res.token
          if(res) {
            this.isAuth = true
          }
        }),
        catchError((error) => {
          console.error('Erro ao tentar fazer o login', error)
          this.isAuth = false
          return of(null)
        })
      )
  }

  logout(): void {
    this.isAuth = false
  }

  getAuthToken(): string|null {
    return this.authToken
  }

  getIsAuthenticated(): boolean {
    return this.isAuth
  }
}

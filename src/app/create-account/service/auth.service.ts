import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  login(user: User) {
    return this.httpClient.post(`/api/user/login`, user)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  signup(user: User) {
    return this.httpClient.post(`/api/user/signup`, user)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));

  };

}
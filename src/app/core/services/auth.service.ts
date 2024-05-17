import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserAuth, UserCreate } from '../../types/user.types';
import { SuccessAuthResponse } from '../../types/auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;

  private readonly http = inject(HttpClient);

  login = (authData: UserAuth) =>
    this.http.post<SuccessAuthResponse>(`${this.API_URL}/login`, authData);

  register = (userCreate: UserCreate) =>
    this.http.post(`${this.API_URL}/register`, userCreate);
}

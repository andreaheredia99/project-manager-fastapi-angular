//servicios para conectar con fastapi

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/auth.model';

// Angular puede usar este servicio en toda la app
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/login`;

  // para hacer peticiones http
  constructor(private http: HttpClient) { }
  
  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(this.apiUrl, data);
  }
}

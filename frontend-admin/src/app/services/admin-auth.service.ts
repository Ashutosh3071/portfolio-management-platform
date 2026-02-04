import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('admin_token', token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('admin_token');
  }

  logout() {
    localStorage.removeItem('admin_token');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://46.100.94.88:3000';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(username: string, password: string): Observable<{ token: string }> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, formData).pipe(
      tap(response => this.tokenService.saveToken(response.token))
    );
  }

  register(username: string, password: string): Observable<{ token: string }> {
    const body = { username, password };
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, body).pipe(
      tap(response => this.tokenService.saveToken(response.token))
    );
  }

  getPosts(): Observable<{ posts: { description: string, image: string, post_id: number, user_id: number }[] }> {
    // Assuming token is required for authentication, add it to the headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenService.getToken()}` // Adjust based on your token service
    });
    return this.http.get<{ posts: { description: string, image: string, post_id: number, user_id: number }[] }>(
      `${this.apiUrl}/get/posts`,
      { headers }
    );
  }

  logout(): void {
    this.tokenService.removeToken();
  }
}
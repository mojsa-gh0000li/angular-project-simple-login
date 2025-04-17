import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public tokenKey = 'auth_token';

  saveToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    } else {
      console.error('localStorage is not available.');
    }
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    console.error('localStorage is not available.');
    return null;
  }

  removeToken(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    } else {
      console.error('localStorage is not available.');
    }
  }

  // متد اختیاری برای بررسی وجود توکن
  hasToken(): boolean {
    return !!this.getToken();
  }
}
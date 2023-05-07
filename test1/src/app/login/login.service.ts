import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../user/user-list.component';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user: any;
  usersUrl: string = 'api/Users/users.json';
  users: User[] = [];
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.http.get<User[]>(this.usersUrl)
      .subscribe(response => {
        this.users = response;
        console.log(this.users);

      });
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }


  isLoggedIn() {
    return this.getToken != null;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    this.user = this.users.find((user: User) => user.email === email);
      if (password === this.user.password) {
        this.setToken('QpwL5tke4Pnpja7X4');
        console.log(this.user);
        return of(this.user.userName, this.user.email)
        
      }
      return throwError(() => new Error('Filed login'));

    }

  
}

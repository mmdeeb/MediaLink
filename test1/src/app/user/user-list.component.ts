import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'te-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void {
    this.http.get<ApiResponse>('https://dummyjson.com/users')
      .subscribe(response => {
        this.users = response.users;
        this.filteredUsers = response.users;
        console.log(this.users);
      });
  }

  private _listFilter : string = "";

  public get listFilter() : string {
    return this._listFilter;
  }
  public set listFilter(v : string) {
    this._listFilter = v.toLocaleLowerCase();
    this.filteredUsers = this.users.filter((user: User) => 
    user.firstName.toLocaleLowerCase().includes(this._listFilter));
  }
  

}

interface ApiResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}
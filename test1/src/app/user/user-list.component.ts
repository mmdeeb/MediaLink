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
  usersUrl : string = 'api/Users/users.json'

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void {
    this.http.get<User[]>(this.usersUrl)
      .subscribe(response => {
        this.users = response;
        this.filteredUsers = response;
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
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  profileImage: string;
  education: string
  address: string;
  job: string;
  socialMediaLinks: string [];
  skills: string [];
}



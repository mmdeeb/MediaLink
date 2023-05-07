import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginInfo } from './Login-info';
import { User } from '../user/user-list.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'te-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginFailed!: boolean;
  islogin: boolean =false;
  loginInfo: LoginInfo = new LoginInfo();
  user: any ;
  id: any ="1";
  users: User []=[];
  usersUrl : string = 'api/Users/users.json';
  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.http.get<User[]>(this.usersUrl)
      .subscribe(response => {
        this.users = response;
        console.log(this.users);
        
      });
  }
  loginUser(form: any): void {
    this.islogin=this.login(form.value);
    if (this.islogin) {
      this.router.navigate(['']);
    } 
    else 
      this.loginFailed = true;


  }
  isLogin(){
    return this.islogin;
  }
  getUserdetails()
  {}

  login({ UserName, password }: any): boolean {
    this.user=this.users.find((user: User)=>user.userName === UserName)
    if (password === this.user.password) {
      return true
    }
    return false

  }
}

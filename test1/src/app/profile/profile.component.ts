import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user-list.component';

@Component({
  selector: 'te-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {

  isCollapsed = true;
  user: any ;
  id: any ="1";
  users: User []=[];
  usersUrl : string = 'api/Users/users.json';
  constructor(private http: HttpClient,private route: ActivatedRoute)
  {
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.http.get<User[]>(this.usersUrl)
      .subscribe(response => {
        this.users = response;
        console.log(this.users);
        this.user=this.users.find((user: User)=>user.id ==parseInt(this.id))
      });
      
        
  }
  navigateToExternalLink(url: string) {
    window.location.href = url;
  }
  

}


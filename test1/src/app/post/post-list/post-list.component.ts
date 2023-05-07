import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user/user-list.component';
import { map } from 'rxjs';

@Component({
  selector: 'te-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  isCollapsed = true;
  posts: Post[] = [];

  usersUrl: string = 'api/Users/users.json';
  postsUrl: string = 'api/Posts/posts.json'
  user: any;
  id: any = "1";
  users: User[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User[]>(this.usersUrl)
      .subscribe(response => {
        this.users = response;

      });
    this.http.get<Post[]>(this.postsUrl).pipe(
      map(posts =>
        posts.map(
          post => post = this.findUserDetails(post)
        )
      )
    )
      .subscribe(response => {
        this.posts = response;
      });


  }
  findUserDetails(post: Post): Post {
    const user = this.users.find(u => u.id === post.userId);
    if (user) {
      post.userName = user.userName;
      post.name = user.firstName + " " + user.lastName;
      post.profileImage = user.profileImage;

    }
    return post;
  }

}

export interface Post {
  id: number;
  content: string;
  image: string;
  video: string;
  numberOfLikes: number;
  numberOfComments: number;
  created: string;
  userId: number;
  userName: string;
  name: string;
  profileImage: string;
}


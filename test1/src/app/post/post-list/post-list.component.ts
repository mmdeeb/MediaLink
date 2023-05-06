import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'te-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  isCollapsed = true;
  posts: Post[] = [];
  postsUrl : string = 'api/Posts/posts.json'

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void {
    this.http.get<Post[]>(this.postsUrl)
      .subscribe(response => {
        this.posts = response;
        console.log(this.posts)
      });
  }

}

interface Post {
  id: number;
  content: string;
  image: string;
  video: string;
  numberOfLikes: number;
  numberOfComments : number;
  created : string;
  userId : number;
  userName : string;
  profileImage : string;
}


// interface ApiResponse {
//   posts: Post[];
//   total: number;
//   skip: number;
//   limit: number;
// }
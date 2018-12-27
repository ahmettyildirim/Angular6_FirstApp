import { Component, OnInit } from '@angular/core';
import { Post } from '../objects/post';
import { HttpClient } from '@angular/common/http'
import { User } from '../objects/user';
import { ActivatedRoute } from '@angular/router'
import { AlertifyService } from "../services/alertify.service"
import { PostService } from "./post.service"
import { UserService } from "./user.service"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService,
    private userService: UserService,
  ) { }
  posts: Post[];
  users: User[];
  today = new Date(2018,5,2);
  ngOnInit() {
    this.getUsers();

    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"]);
    })

  }

  getPosts(userid) {
    this.postService.getPosts(userid).subscribe(data => {
      this.posts = data
    })
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  addToFavorites(post) {
    this.alertifyService.error("Added to favs :" + post.title)
  }
}

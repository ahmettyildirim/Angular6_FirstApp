import { Injectable } from '@angular/core';
import { Post } from '../objects/post';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  path: string = "https://jsonplaceholder.typicode.com/"
  getPosts(userid):Observable<Post[]> {
    if (userid) {
      return this.http.get<Post[]>(this.path + "posts?userId=" + userid);
    } else {
      return this.http.get<Post[]>(this.path + "posts");
    }
  }
}

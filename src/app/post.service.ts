import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPosts(objPost: Post): Observable<Post[]> {
    return this.http.post<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      objPost
    );
  }
}

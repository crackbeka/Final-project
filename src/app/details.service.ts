import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Detail {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  details$ = new BehaviorSubject<Detail[]>([]);
  constructor(private http: HttpClient) {}

  getComments(id: Detail[]) {
    return this.http.get<Detail[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }

  addComments(detail: Detail): Observable<Detail[]> {
    return this.http.post<Detail[]>(
      'https://jsonplaceholder.typicode.com/comments',
      detail
    );
  }
}

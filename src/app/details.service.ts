import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail } from './post-details/post-details.component';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getDetails(id: number) {
    return this.http.get<Detail[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getComments(id: number) {
    return this.http.get<Detail[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }
}

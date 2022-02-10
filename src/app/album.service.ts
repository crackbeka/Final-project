import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
}

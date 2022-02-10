import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Photos[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}

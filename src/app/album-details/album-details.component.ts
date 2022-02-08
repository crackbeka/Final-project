import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photos, PhotosService } from '../photos.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  photos!: Photos[];
  constructor(private http: HttpClient, private photoService: PhotosService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data) => {
      this.photos = data;
    });
  }
}

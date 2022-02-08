import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Album, AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];

  constructor(private http: HttpClient, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }
}

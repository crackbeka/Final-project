import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

export interface Detail {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  details!: Detail[];

  constructor(
    private http: HttpClient,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.detailsService.getDetails().subscribe((data) => {
      this.details = data;
    });
  }
}

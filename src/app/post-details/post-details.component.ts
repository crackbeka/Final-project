import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  comments!: any[];
  editMode = false;

  constructor(
    private http: HttpClient,
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.detailsService
      .getDetails(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.details = data;
      });

    this.detailsService
      .getComments(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data;
      });
  }

  startEdit() {
    this.editMode = true;
  }
}

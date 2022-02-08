import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent implements OnInit {
  addPost!: Post[];
  post!: Post;
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {}

  addPosts() {}
}

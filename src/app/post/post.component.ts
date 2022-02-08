import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts!: Post[];
  objPosts!: Post[];

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    // const oPost = new Post() ;
    // oPost.body = 'testboy';
    // oPost.title = 'test';
    // oPost.userId = 5;
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });

    this.postsService;
    this.postsService.addPosts(this.objPosts[1]).subscribe((data) => {
      this.objPosts = data;
    });
  }
}

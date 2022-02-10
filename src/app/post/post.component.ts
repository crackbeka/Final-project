import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  posts!: Post[];
  objPosts!: Post[];
  showAddPost = false;
  private subscription!: Subscription;

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.subscription = this.postsService.posts$.subscribe((data) => {
      this.posts = data;
    });

    this.postsService.getPosts().subscribe((data) => {
      this.postsService.posts$.next(data);
    });
  }

  toggleAddPost() {
    this.showAddPost = !this.showAddPost;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

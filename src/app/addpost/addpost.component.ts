import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent implements OnInit {
  addPost!: Post[];
  post!: Post;
  form!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  addPosts() {
    if (!this.form.valid) {
      return;
    }

    this.postService.addPosts(this.form.value).subscribe(() => {
      this.postService.posts$.next([
        this.form.value,
        ...this.postService.posts$.value,
      ]);
    });
  }
}

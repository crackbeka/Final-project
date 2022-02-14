import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail, DetailsService } from '../details.service';

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.scss'],
})
export class AddcommentsComponent implements OnInit {
  addComm!: Detail[];
  comm!: Detail;
  commentInputs!: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.commentInputs = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  addComments() {
    if (this.commentInputs.valid) {
      this.detailsService
        .addComments(this.commentInputs.value)
        .subscribe(() => {
          this.detailsService.comments$.next([
            this.commentInputs.value,
            ...this.detailsService.comments$.value,
          ]);
        });
    } else {
      return;
    }
  }
}

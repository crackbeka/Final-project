import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Detail, DetailsService } from '../details.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  comments!: Detail[];

  comms!: FormGroup;

  editMode = false;

  showComments = false;

  private subsComm!: Subscription;

  constructor(
    private http: HttpClient,
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comms = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
    });
    this.detailsService
      .getComments(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data;
      });

    this.subsComm = this.detailsService.comments$.subscribe((data) => {
      this.comments = data;
    });
  }

  toggleAddComments() {
    this.showComments = !this.showComments;
  }

  ngOnDestroy(): void {
    this.subsComm.unsubscribe;
  }

  startEdit() {
    this.editMode = true;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddpostComponent } from './addpost/addpost.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddcommentsComponent } from './addcomments/addcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AlbumsComponent,
    TodosComponent,
    HomeComponent,
    AddpostComponent,
    AlbumDetailsComponent,
    PostDetailsComponent,
    AddcommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

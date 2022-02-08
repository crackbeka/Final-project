import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent,
  },

  {
    path: 'albums/:id',
    component: AlbumDetailsComponent,
  },
  //
  {
    path: 'posts',
    component: PostComponent,

    children: [
      {
        path: 'addpost',
        component: AddpostComponent,
      },
    ],
  },
  //

  {
    path: 'details',
    component: PostDetailsComponent,
  },

  //
  {
    path: 'todos',
    component: TodosComponent,
  },
  //
  {
    path: 'home',
    component: HomeComponent,
  },
  //
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogEditComponent} from "./blog-edit/blog-edit.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {BlogComponent} from "./blog/blog.component";


const routes: Routes = [{
  path: 'blog',
  component: BlogComponent
}, {
  path: 'blog/:id',
  component: BlogDetailComponent
}, {
  path: 'blog/:id/edit',
  component: BlogEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

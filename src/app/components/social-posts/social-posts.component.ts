import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { SinglePostComponent } from "../single-post/single-post.component";
import { PostFormComponent } from "../post-form/post-form.component";

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent, PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  posts: Post[] = [];

  onSubmit(post: Post) {
    this.posts.push(post);
  }
}

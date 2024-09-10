import { Component } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  posts: Post[] = [];

  onSubmit(post: Post) {
    this.posts.push(post);
  }
}

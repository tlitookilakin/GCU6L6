import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() post: Post = {} as Post;
  @Output() deleted: EventEmitter<Post> = new EventEmitter<Post>();

  deletePost() : void {
    this.deleted.emit(this.post);
  }
}

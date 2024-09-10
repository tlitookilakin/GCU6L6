import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  display: boolean = false;
  post: Post = {} as Post;
  @Output() submitted: EventEmitter<Post> = new EventEmitter<Post>();

  submitPost() : void {
    this.submitted.emit(this.post);
    this.post = {} as Post;
  }

  toggleDisplay() : void {
    this.display = !this.display;
  }
}

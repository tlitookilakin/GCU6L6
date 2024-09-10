import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  display: boolean = false;
  post: Post = {} as Post;
  @Output() submitted: EventEmitter<Post> = new EventEmitter<Post>();

  submitPost() : void {
    if (!this.post.body && !this.post.title) {
      this.cancel();
      return;
    }

    this.submitted.emit(this.post);
    this.post = {} as Post;
    this.display = false;
  }

  toggleDisplay() : void {
    this.display = !this.display;
  }

  cancel() : void {
    this.post = {} as Post;
    this.display = false;
  }
}

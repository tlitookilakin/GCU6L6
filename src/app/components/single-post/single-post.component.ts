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
  vote: number = 0;

  deletePost() : void {
    this.deleted.emit(this.post);
  }

  setVote(isUp: boolean) : void {
    let toAdd : number = 0;
    
    if (isUp) {
      if (this.vote > 0) {
        this.vote = 0;
        toAdd = -1;
      }
      else {
        toAdd = this.vote < 0 ? 2 : 1;
        this.vote = 1;
      }
    } else {
      if (this.vote < 0) {
        this.vote = 0;
        toAdd = 1;
      }
      else {
        toAdd = this.vote > 0 ? -2 : -1;
        this.vote = -1;
      }
    }

    this.post.votes += toAdd;
  }
}
